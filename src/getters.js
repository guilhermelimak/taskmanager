export const cards = state => state.cards
export const lists = state => state.lists

export const isCardModalOpen = state => state.isCardModalOpen
export const isImportModalOpen = state => state.isImportModalOpen
export const isSidebarOpen = state => state.isSidebarOpen

export const currentCardID = state => state.currentCardID
export const currentCard = state => {
  if (state.cards && state.currentCardID) {
    return state.cards[state.currentCardID]
  }

  return {}
}
