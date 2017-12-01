import LoadingBar from './lan-loadingBar'

let loadingBarInstance;
let color = '#FF7846';
let failColor = '#FE4B4B';
let height = 2;
let timer;

function getLoadingBarInstance () {
  loadingBarInstance = loadingBarInstance || LoadingBar.newInstance({
    color: color,
    failColor: failColor,
    height: height
  });

  return loadingBarInstance;
}

function update(options) {
  let instance  = getLoadingBarInstance();

  instance.update(options);
}

function hide() {
  setTimeout(() => {
    update({
      visible: false
    });
    setTimeout(() => {
      update({
        percent: 0
      });
    }, 200);
  }, 800);
}

function clearTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

export default {
  start () {
    if (timer) return;

    let percent = 0;

    update({
      percent: percent,
      status: 'success',
      visible: true
    });

    timer = setInterval(() => {
      percent += Math.floor(Math.random () * 3 + 5);
      if (percent > 95) {
        clearTimer();
      }
      update({
        percent: percent,
        status: 'success',
        visible: true
      });
    }, 200);
  },
  finish () {
    clearTimer();
    update({
      percent: 100,
      status: 'success',
      visible: true
    });
    hide();
  },
  error () {
    clearTimer();
    update({
      percent: 100,
      status: 'error',
      visible: true
    });
    hide();
  },
  config (options) {
    if (options.color) {
      color = options.color;
    }
    if (options.failColor) {
      failColor = options.failColor;
    }
    if (options.height) {
      height = options.height;
    }
  },
  destroy () {
    clearTimer();
    let instance = getLoadingBarInstance();
    loadingBarInstance = null;
    instance.destroy();
  }
};
