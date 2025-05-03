const container = document.querySelector(".container");

for (let i = 1; i <= 16; i++) {
  for (let j = 1; j <= 16; j++) {
    const div = document.createElement("div");
    container.appendChild(div);
  }
}

const divs = document.querySelectorAll(".container div");
divs.forEach((div) => {
  div.addEventListener("mouseenter", (event) => {
    const tr = event.target;
    tr.style.backgroundColor = "black";
  });
});
