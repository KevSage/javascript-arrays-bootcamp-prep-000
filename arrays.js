var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(arr, entry) {
  arr = [entry, ...arr];
  return arr;
}
function destructivelyAddElementToBeginningOfArray(array, entry) {
 array.unshift(entry);
 return array;
}
function addElementToEndOfArray(arr, entry) {
  arr = [...arr, entry];
  return arr;
}
function destructivelyAddElementToEndOfArray(arr, entry) {
  arr.push(entry);
}
function accessElementInArray(array, index) {
  return arr[index];
}
function removeElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}
