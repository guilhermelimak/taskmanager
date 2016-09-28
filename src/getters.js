export const cards = state => state.cards
export const lists = state => state.lists

export const isCardModalOpen = state => state.isCardModalOpen
export const isImportModalOpen = state => state.isImportModalOpen
export const isSidebarOpen = state => state.isSidebarOpen
export const isWelcomeScreenOpen = state => state.isWelcomeScreenOpen

export const currentCardID = state => state.currentCardID

export const currentProjectID = state => state.currentProjectID
export const projects = state => state.projects

export const currentProject = state => {
  if (state.projects && state.currentProjectID) {
    return state.projects[state.currentProjectID]
  }

  return {}
}

export const currentCard = state => {
  if (state.cards && state.currentCardID) {
    return state.cards[state.currentCardID]
  }

  return {}
}
