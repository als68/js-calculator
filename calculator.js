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
  function validationFunc(x){
      if (typeof x !== "number") {
      throw new Error("Argument is not a number");
    }
  }

  function _load(x){
    validationFunc(x);
    total = x;
    return total;
  }

  function _getTotal(){
    return total;
  }

  function _add(x){
    validationFunc(x);
    total = total + x;
    return total;
  }

  function _subtract(x){
    validationFunc(x);
    total = total - x;
    return total;
  }

  function _multiply(x){
    validationFunc(x);
    total = total * x;
    return total;
  }

  function _divide(x){
    validationFunc(x);
    total = (total / x);
    return total;
  }

  function _recallMemory(){
    return memory;
  }

  function _saveMemory(){
    memory = total;
  }

  function _clearMemory(){
    memory = 0;
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