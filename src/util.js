export const getParentBag = (el) => {
  let currentElement = el

  for (let i = 0; i < 100; i++) {
    if (currentElement.hasAttribute('bag')) {
      break
    } else {
      currentElement = currentElement.parentNode
    }
  }

  return currentElement
}

export const emptyCard = {
  title: null,
  workLogged: null,
  description: null,
  hours: 0,
  listId: null,
  projectId: null,
  analysis_duration: null,
  development_duration: null,
  testing_duration: null,
}

export const emptyList = {
  name: null,
}

export const emptyProject = {
  name: null,
}
