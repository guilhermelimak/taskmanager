export default {
  REPLACE_STATE(state, newState) {
    state.lists = newState.lists || {}
    state.cards = newState.cards || {}
    state.projects = newState.projects || {}
  },

  DISABLE_LOADING(state) {
    state.loading = false
  },

  TOGGLE_CARD_MODAL(state) {
    state.isCardModalOpen = !state.isCardModalOpen
  },

  HIDE_WELCOME_SCREEN(state) {
    state.isWelcomeScreenOpen = false
  },

  TOGGLE_IMPORT_MODAL(state) {
    state.isImportModalOpen = !state.isImportModalOpen
  },

  TOGGLE_SIDEBAR(state) {
    state.isSidebarOpen = !state.isSidebarOpen
  },

  CHANGE_CURRENT_PROJECT(state, projectID) {
    state.currentProjectID = projectID
    state.currentCardID = null
    state.isSidebarOpen = false
  },

  CHANGE_CURRENT_CARD(state, cardKey) {
    state.currentCardID = cardKey
  },

  IMPORT_TASKS(state, tasksList) {
    const tasksObj = JSON.parse(tasksList)

    for (const key in tasksObj.tasks) {
      state.cards[key] = { ...tasksObj.tasks[key], listID: 'a' }
    }
  },
}
