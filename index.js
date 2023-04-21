function returnsANamedFunction() {
  return function namedFunction() {};
}

function returnsAnAnonymousFunction() {
  return function () {};
}

function receivesAFunction(callback) {
  callback();
}
