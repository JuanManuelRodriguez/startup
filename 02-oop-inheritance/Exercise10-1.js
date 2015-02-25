//Apply the mixin to Movie object and play with the console output.
function extend(destination, source) {
  for (var methodName in source) {
    if (!destination.hasOwnProperty(methodName)) {
      destination[methodName] = source[methodName];
    }
  }
  return destination; 
}

extend(Movies.prototype,Social);