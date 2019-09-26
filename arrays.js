var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(arr, candy) {
  arr = arr.unshift(candy);
  return arr;
}
function destructivelyAddElementToBeginningOfArray(arr, candy) {
  moreCandy = [candy, ...arr]
  return moreCandy;
}
