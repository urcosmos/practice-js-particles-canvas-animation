(function () {

  let canvas = document.createElement('canvas');
  let ctx = canvas.getContext('2d');
  let w = canvas.width = innerWidth;
  let h = canvas.height = innerHeight;
  let particles = [];
  let propertis = {
    bgColor: 'rgba(66, 66, 83, 1)',

  };

  document.querySelector('body').appendChild(canvas);

  window.onresize = function () {
    w = canvas.width = innerWidth;
    h = canvas.height = innerHeight;
  };

  function reDrawBackground() {
    ctx.fillStyle = propertis.bgColor;
    ctx.fillRect(0, 0, w, h);
  }

  function loop() {
    requestAnimationFrame(loop);
    reDrawBackground();
  }

  function init() {
    loop();
  }

  init();

}());