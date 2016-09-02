export default {
  REPLACE_STATE(state, newState) {
    state.lists = newState.lists
    state.cards = newState.cards
  },

  DISABLE_LOADING(state) {
    state.loading = false
  },

  TOGGLE_MODAL(state) {
    state.isCardModalOpen = !state.isCardModalOpen
  },

  CHANGE_CURRENT_CARD(state, card) {
    state.currentCard = card
  },
}
