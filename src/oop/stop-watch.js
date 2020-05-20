/*
  OOP in JS
  Design StopWatch
  Implement counter - a start / stop / reset millisecond counter.
  If you want to do fanciful formatting on the time, that's completely up to you.
  This should be more than enough to get you started.

  Implement an object which behaves like this.
  Properties:
    duration is 0 as an initially - started to calculated from the moment start() method run
  until it called stop method

  methods:
    start - if you call start second time - display stopwatch has already started
    we can't call start twice

    stop() - we can't call stop twice in a row - complain: stopwatch is not started

    reset() - takes stop to initial state

  implementation without classes, but using operator new

  Create html elements
    <div id="a-timer"></div>
    <div id="b-timer"></div>
*/

// creating a blueprint using operator new
function StopWatch(element, options) {
  // private variables
  const timer = createTimer(),
    startButton = createButton('start', start),
    stopButton = createButton('stop', stop),
    resetButton = createButton('reset', reset);

  let offset,
  clock,
  interval,
  running;

  // default options
  options = options || {};
  options.delay = options.delay || 1;

  // append elements
  element.appendChild(timer);
  element.appendChild(startButton);
  element.appendChild(stopButton);
  element.appendChild(resetButton);

  // initialize
  reset();

  // private functions
  function createTimer() {
    return document.createElement('span');
  }

  function createButton(action, handler) {
    const button = document.createElement('button');
    button.innerHTML = action;
    button.addEventListener('click', function(event) {
      handler();
    });
    return button;
  }

  function start() {
    if (running) throw new Error('Stopwatch has already started');
    running = true;

    if (!interval) {
      offset   = Date.now();
      interval = setInterval(update, options.delay);
    }
  }

  function stop() {
    if (!running) throw new Error('Stopwatch is not started');
    running = false;

    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  }

  function reset() {
    clock = 0;
    render();
  }

  function update() {
    clock += delta();
    render();
  }

  function render() {
    timer.innerHTML = clock / 1000;
  }

  function delta() {
    let now = Date.now(),
        duration = now - offset;

    offset = now;
    return duration
  }

  // public api
  this.start = start;
  this.stop = stop;
  this.reset = reset;
}

const timer = document.getElementById('a-timer');
const aTimer = new StopWatch(timer);
//console.log('timer', aTimer);

const b = document.getElementById("b-timer");
const bTimer = new StopWatch(b, {delay: 100});
//console.log('b-timer', bTimer);

export { aTimer, bTimer }
