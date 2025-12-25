const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.getElementById('canvas-container').appendChild(canvas);

let width, height;
let particles = [];
let snowflakes = [];

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

// Dreamy Snowflakes - larger, softer, slower
class Snowflake {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.size = Math.random() * 2 + 1; // 稍微大一点
    this.speed = Math.random() * 0.5 + 0.3; // 慢一点
    this.wind = Math.random() * 0.4 - 0.2;
    this.opacity = Math.random() * 0.6 + 0.2;
    this.blur = Math.random() * 2;
  }
  update() {
    this.y += this.speed;
    this.x += this.wind;
    if (this.y > height) {
      this.y = -20;
      this.x = Math.random() * width;
    }
  }
  draw() {
    ctx.save();
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.shadowBlur = this.blur;
    ctx.shadowColor = 'white';
    ctx.fill();
    ctx.restore();
  }
}

// Gentle Fireworks - "Pastel Blooms"
class Particle {
  constructor(x, y, color, type = 'circle') {
    this.x = x;
    this.y = y;
    this.color = color;
    this.type = type;
    this.velocity = {
      x: (Math.random() - 0.5) * 5,
      y: (Math.random() - 0.5) * 5
    };
    this.alpha = 1;
    this.friction = 0.96;
    this.gravity = 0.1;
  }
  draw() {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.shadowBlur = 5;
    ctx.shadowColor = this.color;
    if (this.type === 'heart') {
      this.drawHeart(this.x, this.y, 3);
    } else {
      ctx.beginPath();
      ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }
  drawHeart(x, y, size) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x, y - size, x - size * 2, y - size, x - size * 2, y + size);
    ctx.bezierCurveTo(x - size * 2, y + size * 2, x, y + size * 4, x, y + size * 4);
    ctx.bezierCurveTo(x, y + size * 4, x + size * 2, y + size * 2, x + size * 2, y + size);
    ctx.bezierCurveTo(x + size * 2, y - size, x, y - size, x, y);
    ctx.fill();
  }
  update() {
    this.velocity.x *= this.friction;
    this.velocity.y *= this.friction;
    this.velocity.y += this.gravity;
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.alpha -= 0.01;
  }
}

function createFirework(x, y) {
  const colors = ['#FFB6C1', '#87CEFA', '#FFFACD', '#E6E6FA', '#FFFFFF']; // 温柔粉, 忧郁蓝, 鹅毛黄, 薰衣草紫
  const color = colors[Math.floor(Math.random() * colors.length)];
  for (let i = 0; i < 40; i++) {
    particles.push(new Particle(x, y, color));
  }
}

// Init
for (let i = 0; i < 80; i++) {
  snowflakes.push(new Snowflake());
}

function animate() {
  ctx.clearRect(0, 0, width, height);

  snowflakes.forEach(snow => {
    snow.update();
    snow.draw();
  });

  particles.forEach((particle, index) => {
    if (particle.alpha <= 0) {
      particles.splice(index, 1);
    } else {
      particle.update();
      particle.draw();
    }
  });

  requestAnimationFrame(animate);
}
animate();

// Interactions
document.getElementById('celebrateBtn').addEventListener('click', (e) => {
  const card = document.querySelector('.card');
  const rect = e.target.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  // 1. 切换卡片状态
  card.classList.add('opened');

  // 2. 喷射大量华丽粒子 (中心迸发)
  for (let i = 0; i < 150; i++) {
    setTimeout(() => {
      let color, type;
      if (i % 6 === 0) {
        color = '#FF6B6B'; // 浪漫粉红
        type = 'heart';
      } else {
        color = i % 2 === 0 ? '#FFD700' : '#FFF';
        type = 'circle';
      }
      const p = new Particle(centerX, centerY, color, type);
      p.velocity.x = (Math.random() - 0.5) * 20;
      p.velocity.y = (Math.random() - 1) * 20;
      p.friction = 0.98;
      p.gravity = 0.3;
      particles.push(p);
    }, Math.random() * 200);
  }

  // 3. 全屏烟火助兴
  for (let i = 0; i < 12; i++) {
    setTimeout(() => {
      createFirework(Math.random() * width, height * (0.2 + Math.random() * 0.5));
    }, i * 300 + 500);
  }
});

// Random background blooms
setInterval(() => {
  if (Math.random() > 0.7) {
    createFirework(Math.random() * width, height * 0.3);
  }
}, 3500);
