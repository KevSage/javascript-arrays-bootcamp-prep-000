var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(arr, entry) {
  var newArr = arr.unshift(entry);
  return newArr;
}
function destructivelyAddElementToBeginningOfArray(arr, entry) {
  return arr.unshift(entry);
}
