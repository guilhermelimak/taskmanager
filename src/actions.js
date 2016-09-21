import { database } from 'store'
import { emptyCard } from 'util'

export const importTasks = ({ dispatch }, tasksList) => {
  const tasksObj = JSON.parse(tasksList).tasks

  for (const key in tasksObj) {
    tasksObj[key] = { ...tasksObj[key], listID: 'a' }
  }

  database
  .ref('cards/')
  .set(tasksObj)
}

export const updateCard = ({ dispatch }, cardID, card) => {
  database
  .ref(`cards`)
  .child(cardID)
  .set(card)
}

export const moveCard = ({ dispatch }, event) => {
  database
  .ref(`cards/${event.cardID}/`)
  .update({ listID: event.targetListID })
}

export const addComment = ({ dispatch, state }, comment) => {
  database
  .ref(`cards/${state.currentCardID}/comments/`)
  .push()
  .set(comment)
}

export const deleteCard = ({ dispatch }, cardID) => {
  if (confirm('Are you sure you want to delete?')) {
    database
    .ref(`cards/${cardID}/`)
    .remove()
  }
}

export const createOrUpdateCard = ({ dispatch }, newCard) => {
  let cardRef
  let cardID

  if (!newCard.key) {
    cardRef = database.ref('cards/').push()
    cardID = cardRef.key
  } else {
    cardID = newCard.key
    cardRef = database.ref(`cards/${cardID}/`)
  }

  cardRef.update({ ...newCard, key: cardID })

  dispatch('TOGGLE_CARD_MODAL')
  dispatch('CHANGE_CURRENT_CARD', { ...emptyCard })
}

export const editCard = ({ dispatch }, card) => {
  dispatch('CHANGE_CURRENT_CARD', card)
  dispatch('TOGGLE_CARD_MODAL')
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
