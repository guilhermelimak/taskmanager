export const cards = state => state.cards
export const lists = state => state.lists

export const isCardModalOpen = state => state.isCardModalOpen
export const isImportModalOpen = state => state.isImportModalOpen
export const isSidebarOpen = state => state.isSidebarOpen
export const isWelcomeScreenOpen = state => state.isWelcomeScreenOpen

export const currentCardId = state => state.currentCardId

export const currentProjectId = state => state.currentProjectId
export const projects = state => state.projects

export const currentProject = state => {
  if (state.projects && state.currentProjectId) {
    return state.projects[state.currentProjectId]
  }

  return {}
}

export const currentCard = state => {
  if (state.cards && state.currentCardId) {
    return state.cards[state.currentCardId]
  }

  return {}
}
