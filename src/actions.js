import { database } from 'store'
import { emptyCard } from 'util'

export const importTasks = ({ dispatch }, tasksList) => {
  const tasksObj = JSON.parse(tasksList).tasks

  for (const key in tasksObj) {
    tasksObj[key] = { ...tasksObj[key], listId: 'a' }
  }

  database
  .ref('cards/')
  .set(tasksObj)
}

export const updateCard = ({ dispatch }, cardKey, card) => {
  database
  .ref('cards')
  .child(cardKey)
  .set(card)
}

export const moveCard = ({ dispatch }, event) => {
  database
  .ref(`cards/${event.cardId}/`)
  .update({ listId: event.targetListId })
}

export const addComment = ({ dispatch, state }, comment) => {
  database
  .ref(`cards/${state.currentCardId}/comments/`)
  .push()
  .set(comment)
}

export const deleteCard = ({ dispatch }, cardKey) => {
  if (confirm('Are you sure you want to delete?')) {
    database
    .ref(`cards/${cardKey}/`)
    .remove()
  }
}

export const replaceState = ({ dispatch }, newState) => {
  dispatch('REPLACE_STATE', newState)
  dispatch('DISABLE_LOADING')
}

export const toggleImportModal = ({ dispatch }) => dispatch('TOGGLE_IMPORT_MODAL')
export const toggleSidebar = ({ dispatch }) => dispatch('TOGGLE_SIDEBAR')

export const changeCurrentCard = ({ dispatch }, cardKey) => {
  dispatch('CHANGE_CURRENT_CARD', cardKey)
}

export const hideWelcomeScreen = ({ dispatch }) => {
  dispatch('HIDE_WELCOME_SCREEN')
}

export const changeCurrentProject = ({ dispatch }, projectId) => {
  dispatch('CHANGE_CURRENT_PROJECT', projectId)
}

export const addNewCard = ({ dispatch }, listKey, projectId) => {
  database
  .ref('cards/')
  .push()
  .set({ ...emptyCard, listId: listKey, projectId })
}
