class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
  
    this.intervalId = setInterval(()=> {
      if(printTimeCallback){
        printTimeCallback()
      };
      this.currentTime++;
    },1000)
    

  }

  getMinutes() {
    // ... your code goes here
    let dirtyTime =this.currentTime / 60;
    let minutes = Math.floor(dirtyTime);
    
    return minutes;
  }

  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let string = value.toString();
    if (string.length === 1){
      string = "0"+string;
    }
    return string;

  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    let timeString = this.computeTwoDigitNumber(this.getMinutes())+":"+this.computeTwoDigitNumber(this.getSeconds());
    return timeString;
  }
}
