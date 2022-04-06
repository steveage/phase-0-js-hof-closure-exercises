const _ = require("underscore")

function forEach(myArray, callBack) {
  myArray.forEach(callBack);
}

function map(myArray, callback) {
  return myArray.map(callback);
}

function filter(myArray, callBack) {
  return myArray.filter(callBack);
}

function every(myArray, callBack) {
  return myArray.every(callBack);
}

function some(myArray, callBack) {
  return myArray.some(callBack);
}

function majority(myArray, callBack) {
  const newArray = myArray.map(callBack);
  const trueElements = newArray.filter(x=>x===true);
  const falseElements = newArray.filter(x=>x===false);
  return trueElements.length>falseElements.length;
}

function once(callBack) {
  let executeCallBack = _.once = function(callBack) {
    let functionHasAlreadyRan, result;
    return function() {
    if (functionHasAlreadyRan) return result;
    functionHasAlreadyRan = true;
    result = callBack();
    return result;
    }
  }
return executeCallBack(callBack);
}

function groupBy(array, iteratee) {
  return _.groupBy(array, iteratee);
}

function arrayToObject(array, callBack) {
  let result = {};
  for(let i=0; i<array.length; ++i){
    result[array[i]] = callBack(array[i]);
  }
  return result;
}

module.exports = { 
  forEach, 
  map, 
  filter, 
  every, 
  some, 
  majority,
  once,
  groupBy,
  arrayToObject,
};
