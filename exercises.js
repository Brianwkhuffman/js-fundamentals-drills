/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray = function(arr){
  let arr2 = [];
  for (let i=0;i<arr.length;i++){
    arr2.push(arr[i]*2);
  }
  return arr2;
}


/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Number}
 */
var sumArrays = function(arr1, arr2){
  var result1 = 0;
  var result2 = 0;
  for (let i=0;i<arr1.length;i++){
    result1 += arr1[i];
  }
  for (let i=0;i<arr2.length;i++){
    result2 += arr2[i];
  }
  return result1 + result2;
}


/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
var stringCount = function(str){
  return str.length;
}

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {Array}
 * @return {Number}
 */
var arrayLength = function(array){
  return array.length;
}

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countAll = function(arrSum){
  let sum = 0;
  for (let i=0;i<arrSum.length;i++){
    sum += arrSum[i];
  }
  return sum;
}

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
var countStrings = function (arrStr){
  let strSize = [];
  for (let i=0;i<arrStr.length;i++){
    strSize.push(arrStr[i].length)
  }
  return strSize;
}

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {Array}
 * @return {Number}
 */
var countAllStrings = function(arrStrSum){
  let strSum = 0
  for (let i=0;i<arrStrSum.length;i++){
    strSum += arrStrSum[i].length;
  }
  return strSum;
}

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
var convertToArray = function(objArr){
  return Object.values(objArr); //Object.values(objArr) puts obj properties into an array
}

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
var objectSize = function(objNum){
  return Object.values(objNum).length; //Object.keys also works
}


//---------------------------------------------------------------------
//Object.keys(obj) returns an array of keys in the object
//Object.values(obj) returns an array of values in the object
//Object.entries(obj) returns an array of [key, value] pairs
//----------------------------------------------------------------------


/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Array}
 */
var createZeroFilledArray = function(numZero){
  let a = [];
  for (let i=0;i<numZero;i++){
  a.push(0);
  }
  return a;
}

/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
var poppedArray = function(arrNum){
  arrNum.pop()
  return arrNum;
}

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
var splitString = function(singlestr){
  let newarr = singlestr.split('');
  return newarr;
}

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {Array}
 * @return {Number}
 */
var lengthOfLast = function(arrlen){
  return arrlen.pop().length;
}

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
var sumBelowTen = function(arrten){
  let num = 0;
  for (let i=0;i<arrten.length;i++){
    if (arrten[i] < 10){
      num += arrten[i];
    }
  }
  return num;
}

/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {Array}
 * @return {Number}
 */
var moreThanTenLetters = function(arrStrTen){
  let newArr = [];
  for (let i=0;i<arrStrTen.length;i++){
    if (arrStrTen[i].length > 10){
      newArr.push(arrStrTen[i]);
    }
  }
  return newArr.length;
}

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
var multiplyAll = function(arrProduct){
  let product = 1;
  for (let i=0;i<arrProduct.length;i++){
    product *= arrProduct[i];
  }
  return product;
}

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {Array}
 * @return {Number}
 */
var sumAllPositive = function (arrInt){
  let num = 0;
  for (let i=0;i<arrInt.length;i++){
    if (typeof arrInt[i] === 'number'){
      if (arrInt[i] > 0){
        num += arrInt[i];
      }
    }
  }
  return num;
}

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree = function(arrThree){
  let arr = [];
  for (let i=0;i<arrThree.length;i++){
    if (typeof arrThree[i] === 'string'){
      if (arrThree[i].length <= 3){
        arr.push(arrThree[i])
      }
    }
  }
  return arr.length;
}

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countObjects = function(arrObj){
  return arrObj.length;
}

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectKeys = function(objKey){
  return Object.keys(objKey);
}

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectValues = function(objVal){
  return Object.values(objVal);
}

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObject = function(strKey, strVal){
  let x = {};
  x[strKey] = strVal; //use brackets to assign a variable as an object
  return x;
}

/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObjectReverse = function(value, key){
  let x = {};
  Object.assign(x, {[key]: value}); //need to use bracket
  return x;
}

/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObject = function(arrTwo){
  let x = {};
  x[arrTwo[0]] = arrTwo[1];
  return x;
}

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObjectReverse = function(arrTwoRev){
  let x = {};
  x[arrTwoRev[1]] = arrTwoRev[0];
  return x;
}

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
var strToKeys = function(arrOfStr){
  let x = {};
  for (let i=0;i<arrOfStr.length;i++){
    x[arrOfStr[i]] = 0;
  }
  return x;
}

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getValues = function(objectArrVal){
  return Object.values(objectArrVal);
}

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys = function(objectArrKeys){
  return Object.keys(objectArrKeys);
}

/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
var objectToArray = function(objectArrTuple){
  let x = [];
  let keyArr = Object.keys(objectArrTuple);
  let valArr = Object.values(objectArrTuple);
  for (let i=0;i<keyArr.length;i++){
    let newArr = [keyArr[i], valArr[i]];
    x.push(newArr)
  }
  return x;
}

/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObject = function(arr3){
  let x = {}
  for (let i=0;i<arr3.length;i++){
    x[arr3[i]] = false;
  }
  return x;
}

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
var arraysToObject = function(arrX, arrY){
  let x = {};
  for (let i=0;i<arrX.length;i++){
    x[arrX[i]] = arrY[i];
  }
  return x;
}

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
var objectsToTuples = function(objX, objY){
  let x = []
  let objXkey = Object.keys(objX);
  let objXval = Object.values(objX);
  let objYkey = Object.keys(objY)
  let objYval = Object.values(objY);
  for (let i=0;i<objXkey.length;i++){
    let newArrx = [objXkey[i], objXval[i]];
    x.push(newArrx);
  }
  for (let i=0;i<objYkey.length;i++){
    let newArry = [objYkey[i], objYval[i]]
    x.push(newArry);
  }
  return x;
}

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
var mapArrayValues = function(arrStrObj){
  let x = {};
  for (let i=0;i<arrStrObj.length;i++){
    x[arrStrObj[i]] = true;
  }
  return x;
}

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var mapStringCounts = function(arrstrkey){
  let x = {};
  for (let i=0;i<arrstrkey.length;i++){
    if (arrstrkey[i].length >= 5){
      x[arrstrkey[i]] = true;
    }else{
      x[arrstrkey[i]] = false;
    }
  }
  return x;
}

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObjectNums = function(arrofnum){
  let x = {};
  for (let i=0;i<arrofnum.length;i++){
    x[arrofnum[i]] = true;
  }
  return x;
}

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
var stringToKeys = function(strsingle){
  let x = {};
  let strarr = strsingle.split('');
  for (let i=0;i<strarr.length;i++){
    x[strarr[i]] = true;
  }
  return x;
}

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
var charCountMap = function(strchar){
  let x = {};
  for (let i=0;i<strchar.length;i++){
    x[strchar[i]] = strchar[i].length;
  }
  return x;
}

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {Array}
 * @return {Object}
 */
var frequencyMap = function(occ){
  let x = {};
  let count = 1;
  for (let i=0;i<occ.length;i++){
    if (occ[i] !== occ[i+1]){
      x[occ[i]] = count;
      count = 1;
    }else{
      x[occ[i]] = count++;
    }
  }
  return x;
}

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleConvertToObject = function(tuplearr){
  let x = {};
  for (let i=0;i<tuplearr.length;i++){
    x[tuplearr[i][0]] = tuplearr[i][1]; 
  }
  return x;
}


module.exports = {
  doubleArray: doubleArray,
  sumArrays: sumArrays,
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: strToKeys,
  getValues: getValues,
  getKeys: getKeys,
  objectToArray: objectToArray,
  arrayToObject: arrayToObject,
  arraysToObject: arraysToObject,
  objectsToTuples: objectsToTuples,
  mapArrayValues: mapArrayValues,
  mapStringCounts: mapStringCounts,
  arrayToObjectNums: arrayToObjectNums,
  stringToKeys: stringToKeys,
  charCountMap: charCountMap,
  frequencyMap: frequencyMap,
  tupleConvertToObject: tupleConvertToObject
}
