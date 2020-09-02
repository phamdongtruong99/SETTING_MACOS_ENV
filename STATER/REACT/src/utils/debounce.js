export function debounce(func, delay) {
  return function (args) {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall&&((this.lastCall - previousCall)<=delay)) 
      {
        clearTimeout(this.lastCallTimer);
      }
    this.lastCallTimer = setTimeout(() => func(args), delay);
  }
}
