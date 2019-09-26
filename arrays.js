var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(arr, candy) {
  arr.unshift(candy);
  [candy, ...chocolateBars];
  return arr;
}
