var extend = function (from, to) {
  for (var key in from) {
    to[key] = from[key];
  }
}

var Stack = function () {
  var someInstance = {};
  someInstance.counter = 0;
  someInstance.storage = {};
  extend(stackMethods, someInstance);
  return someInstance;
}

var stackMethods = {}

stackMethods.push = function (value) {
  this.storage[this.counter] = value;
  this.counter++;
}

stackMethods.pop = function () {
  if (this.counter > 0) {
    this.counter--;
    var result = this.storage[this.counter];
    delete this.storage[this.counter];
    return result;
  }
}

stackMethods.size = function () {
  return this.counter;
}

var BetterStack = function () {
  var someInstance = Stack();
  extend(betterStackMethods, someInstance);
  return someInstance;
}

var betterStackMethods = {};
extend(stackMethods, betterStackMethods);

betterStackMethods.size = function () {
  return this.counter;
}
