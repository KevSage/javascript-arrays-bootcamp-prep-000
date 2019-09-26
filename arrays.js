var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(arr, entry) {
  arr = [entry, ...arr];
  return arr;
}
function destructivelyAddElementToBeginningOfArray(arr, entry) {
  return arr.unshift(entry);
}
function addElementToEndOfArray(arr, entry) {
  arr = [...arr, entry];
  return arr;
}
function destructivelyAddElementToEndOfArray(arr, entry) {
  return arr.push(entry);
}
function accessElementInArray(array, index) {
  return arr[index];
}
function removeElementFromBeginningOfArray(array) {
  return array.unshift();
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}
function removeElementFromEndOfArray(array) {
  var newArr = array.pop();
  return array;
}
