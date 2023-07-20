const canvas = document.querySelector("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;

console.log(canvas.height);

const c = canvas.getContext("2d");

// class for player like control abble player here square
class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };
    this.velocity = {
      x: 0,
      y: 1,
    };
    this.gravity = 1.5;
    this.width = 40;
    this.height = 40;
  }

  // Method for drawing player
  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  //Method for updating plyer postition
  update() {
    this.position.y += this.velocity.y;
    // if postion, velocity and height of player is greater then canvas height then we give velocity 0 because we dont want to go our player beyond canvas and become invisible
    if (this.position.y + this.velocity.y + this.height <= canvas.height) {
      this.velocity.y += this.gravity;
    } else {
      this.velocity.y = 0;
    }
    this.draw();
  }

  Jump() {
    this.position.y -= 100;
  }

  MoveForward() {
    // this.position.y -= 50;
    this.position.x += 10;
  }
}

// creating object of Player class to call methods (draw and update)
const player = new Player();

// Function for operating animation like requesting animation frame to callback this function
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
}

// Function for
function keypress(e) {
  if (e.key === "ArrowUp") {
    player.Jump();
  }

  if (e.key === "ArrowRight") {
    player.MoveForward();
  }
}

document.addEventListener("keydown", keypress);

animate();
