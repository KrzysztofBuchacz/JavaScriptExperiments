// !! DONT WORK !!
// I'm not sure this kind class declaration can be used for inheritance
// !! DONT WORK !!

var Stack = function () {
  var someInstance = Object.create(stackMethods);
// !! DONT WORK !!
  someInstance.counter = 0;
  someInstance.storage = {};
  return someInstance;
}

var stackMethods = {}

stackMethods.push = function (value) {
  this.storage[this.counter] = value;
// !! DONT WORK !!
  this.counter++;
}

stackMethods.pop = function () {
  if (this.counter > 0) {
    this.counter--;
    var result = this.storage[this.counter];
// !! DONT WORK !!
    delete this.storage[this.counter];
    return result;
  }
}

stackMethods.size = function () {
  return this.counter;
}

var BetterStack = function () {
// !! DONT WORK !!
  var someInstance = Object.create(betterStackMethods);
  return someInstance;
}

var betterStackMethods = Object.create(stackMethods);

betterStackMethods.size = function () {
  return this.counter;
}
