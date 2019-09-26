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
function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift();
}
function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop();
}
