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
  title: '',
  description: '',
  hours: 0,
}
