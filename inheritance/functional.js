var Stack = function() {
  var someInstance = {};

  someInstance.counter = 0;
  someInstance.storage = {};

  someInstance.push = function (value) {
    someInstance.storage[someInstance.counter] = value;
    someInstance.counter++;
  };

  someInstance.pop = function () {
    if (someInstance.counter > 0) {
      someInstance.counter--;
      var result = someInstance.storage[someInstance.counter];
      delete someInstance.storage[someInstance.counter];
      return result;
    }
  };

  someInstance.size = function () {
    return someInstance.counter;
  };

  return someInstance;
};

var BetterStack = function () {
  var someInstance = Stack();

  someInstance.size = function () {
    return someInstance.counter;
  };

  return someInstance;
}