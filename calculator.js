/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

var calculatorModule = (function() {
  var memory = 0;
  var total = 0;
  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
  function _load(x){
    total = x;
    return total;
  }

function _getTotal(){
  return total;
}

function _add(x){
  total = total + x;
  return total;
}

function _subtract(x){
  total = total - x;
  return total;
}

function _multiply(x){
  total = total * x;
  return total;
}

function _divide(x){
  total = (total / x);
  return total;
}

function _recallMemory(){
  return memory;
}

function _saveMemory(){
  memory = total;
  return memory;
}

function _clearMemory(){
  memory = 0;
  return memory;
}

  /**
   * Validation
   */
if (typeof x !== "number") {
  console.log("Error");
}

  return {
    load: _load,
    getTotal: _getTotal,
    add: _add,
    subtract: _subtract,
    multiply: _multiply,
    divide: _divide,
    recallMemory: _recallMemory,
    saveMemory: _saveMemory,
    clearMemory: _clearMemory
  }
});