class Goblin {
  move() {
    setInterval(() => {
      this.goblin = document.querySelector('.goblin');
      const randomIndex = Math.floor(1 + Math.random() * 16 - 1 + 1);
      const nextGoblin = document.getElementById(`hole${randomIndex}`);
      if (this.goblin) {
        this.goblin.classList.remove("goblin");
      }
      nextGoblin.classList.add("goblin");
    }, 1000);
  }
}

let game = new Goblin();
game.move();

let cli = document.querySelector(".hole-game");
cli.addEventListener("click", handler);
function handler(e) {
  if (e.target.classList.contains("goblin")) {
    document.getElementById("hit").textContent =
    Number(document.getElementById("hit").textContent) + 1;
    e.target.classList.remove("goblin");
  } else {
    document.getElementById("miss").textContent =
    Number(document.getElementById("miss").textContent) + 1;
    if (document.getElementById("miss").textContent == 5) {
    alert("Goblin win!"); 
  document.getElementById("miss").textContent = 0;
  document.getElementById("hit").textContent = 0;
    }
  }
}
