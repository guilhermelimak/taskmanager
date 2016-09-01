export default {
  REPLACE_STATE(state, newState) {
    state.lists = newState.lists
    state.cards = newState.cards
  },
  DISABLE_LOADING(state) {
    state.loading = false
  },
}
