var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(arr, candy) {
  arr.unshift(candy);
  return arr;
}
function destructivelyAddElementToBeginningOfArray(arr, candy) {
  var moreCandy = [candy, ...arr]
  return moreCandy;
}
