export function throttleFunction(func, delay) {
  return function (args) {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall === undefined
    || (this.lastCall - previousCall) > delay) { 
     // function is being called for the first time or throttle time has elapsed
      func(args);
    }
  }
}
