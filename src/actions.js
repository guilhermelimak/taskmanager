import { database } from 'store'
import { emptyCard } from 'util'

export const moveCard = ({ dispatch }, event) => {
  database.ref(`cards/${event.cardID}/`).update({ listID: event.targetListID })
}

export const updateCard = ({ dispatch }, cardID, newCard) => {
  if (!cardID) {
    cardID = database.ref('cards/').push().update({ ...newCard })
  } else {
    database.ref(`cards/${cardID}/`).update({ ...newCard })
  }

  dispatch('TOGGLE_MODAL')
  dispatch('CHANGE_CURRENT_CARD', { ...emptyCard })
}

export const deleteCard = ({ dispatch }, cardID) => {
  database.ref(`cards/${cardID}/`).remove()
}

export const addCard = ({ dispatch }, newCard, listID) => {
  dispatch('ADD_CARD', newCard, listID)
}

export const editCard = ({ dispatch }, card) => {
  dispatch('CHANGE_CURRENT_CARD', card)
  dispatch('TOGGLE_MODAL')
}

export const newCardModal = ({ dispatch }, listID) => {
  dispatch('CHANGE_CURRENT_CARD', { ...emptyCard, listID })
  dispatch('TOGGLE_MODAL')
}

export const replaceState = ({ dispatch }, newState) => {
  dispatch('REPLACE_STATE', newState)
  dispatch('DISABLE_LOADING')
}

export const toggleModal = ({ dispatch }) => dispatch('TOGGLE_MODAL')

export const updateCurrentCard = ({ dispatch }, card) => {
  dispatch('CHANGE_CURRENT_CARD', { ...card })
}
