chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  return [...array, element]
}

function desctructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element)
}

function addElementToEndOfArray(array, element) {
  return [element, ...array]
}

function desctructivelyAddElementToEndOfArray(array, element) {
  return array.push(element)
}

function accessElementInArray(array, i) {
  return array[i]
}