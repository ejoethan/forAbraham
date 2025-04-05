document.getElementById('playBtn').addEventListener('click', function () {
    const audio = document.getElementById('birthdaySong');
    audio.play();
  });
  
  // Bonus: Confetti sederhana (menggunakan pustaka eksternal bisa lebih keren)
  function simpleConfetti() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    let confettis = [];
  
    for (let i = 0; i < 100; i++) {
      confettis.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        r: Math.random() * 6 + 4,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        speed: Math.random() * 3 + 2
      });
    }
  
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let c of confettis) {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fillStyle = c.color;
        ctx.fill();
        c.y += c.speed;
        if (c.y > canvas.height) {
          c.y = -10;
          c.x = Math.random() * canvas.width;
        }
      }
      requestAnimationFrame(draw);
    }
  
    draw();
  }
  
  window.onload = simpleConfetti;
  