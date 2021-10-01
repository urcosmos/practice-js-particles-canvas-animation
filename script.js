(function () {

  let canvas = document.createElement('canvas');
  let ctx = canvas.getContext('2d');
  let w = canvas.width = innerWidth;
  let h = canvas.height = innerHeight;
  let particles = [];
  let properties = {
    bgColor: 'rgba(66, 66, 83, 1)',
    particleColor: 'rgba(255, 40, 40, 1)',
    particleRadius: 3,
    particleCount: 60,
    particleMaxVelocity: 0.5
  };

  document.querySelector('body').appendChild(canvas);

  window.onresize = function () {
    w = canvas.width = innerWidth;
    h = canvas.height = innerHeight;
  };

  class Particle {
    constructor() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.velocityX = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
      this.velocityY = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
    }

    reDraw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fillStyle = properties.particleColor;
      ctx.fill();
    }

    position() {
      // if (this.x + this.velocityX > w && this.velocityX > 0 || this.x + this.velocityX < 0 && this.velocityX < 0) {
      if (this.x + this.velocityX > w || this.x + this.velocityX < 0) {
        this.velocityX *= -1;
      }
      if (this.y + this.velocityY > h || this.y + this.velocityY < 0) {
        this.velocityY *= -1;
      }
      this.x += this.velocityX;
      this.y += this.velocityY;
    }
  }

  function reDrawParticles() {
    for (let i in particles) {
      particles[i].position();
      particles[i].reDraw();
    }
  }

  function reDrawBackground() {
    ctx.fillStyle = properties.bgColor;
    ctx.fillRect(0, 0, w, h);
  }

  function loop() {
    requestAnimationFrame(loop);
    reDrawBackground();
    reDrawParticles();
  }

  function init() {
    for (let i = 0; i < properties.particleCount; i++) {
      particles.push(new Particle());
    }
    loop();
  }

  init();

}());