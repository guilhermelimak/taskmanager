import { database } from 'store'

export const replaceState = ({ dispatch }, newState) => {
  dispatch('REPLACE_STATE', newState)
  dispatch('DISABLE_LOADING')
}

export const moveCard = ({ dispatch }, event) => {
  database.ref(`cards/${event.cardID}/`).update({ listID: event.targetListID })
}
