export default {
  REPLACE_STATE(state, newState) {
    state.lists = newState.lists || {}
    state.cards = newState.cards || {}
  },

  DISABLE_LOADING(state) {
    state.loading = false
  },

  TOGGLE_CARD_MODAL(state) {
    state.isCardModalOpen = !state.isCardModalOpen
  },

  TOGGLE_IMPORT_MODAL(state) {
    state.isImportModalOpen = !state.isImportModalOpen
  },

  CHANGE_CURRENT_CARD(state, card) {
    state.currentCard = card
  },

  IMPORT_TASKS(state, tasksList) {
    const tasksObj = JSON.parse(tasksList)

    for (const key in tasksObj.tasks) {
      state.cards[key] = { ...tasksObj.tasks[key], listID: 'a' }
    }
  },
}
