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
    },10)
  }

  getMinutes() {
    // ... your code goes here
    let dirtyTime =this.currentTime /100 /60;
    let minutes = Math.floor(dirtyTime);
    
    return minutes;
  }

  getSeconds() {
    // ... your code goes here
    let dirtySeconds = this.currentTime /100;
    let seconds = dirtySeconds % 60;
    return seconds;
  }

  getCentiseconds() {
    // ... your code goes here
    let dirtyCenti = this.currentTime % 600  ;
    let centi = dirtyCenti % 100;
    return centi;
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
    // ... your code goes here
    let uni = Math.floor(this.getCentiseconds / 10);
    let dec = this.getCentiseconds % 10;


    let timeString = this.computeTwoDigitNumber(this.getMinutes())+":"+this.computeTwoDigitNumber(this.getSeconds())+"."+uni+dec;
    return timeString;
  }
}
