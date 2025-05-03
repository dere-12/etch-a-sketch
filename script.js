const container = document.querySelector(".container");
createGrid();

function createGrid(n = 16) {
  // n = number of squares per side(like 5x5, 16x16...)
  const containerWidth = 640;
  const squareWidthOrHeight = containerWidth / n;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      const div = document.createElement("div");
      div.style.width = `${squareWidthOrHeight}px`;
      div.style.height = `${squareWidthOrHeight}px`;
      container.appendChild(div);
    }
  }

  const divs = document.querySelectorAll(".container div");
  divs.forEach((div) => {
    div.addEventListener("mouseenter", (event) => {
      const tr = event.target;
      tr.style.backgroundColor = "black";
    });

    div.addEventListener("click", (event) => {
      event.target.style.backgroundColor = "white";
    });
  });
}

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  const n = parseInt(prompt("Enter number of squares per side (1-100)"));
  if (n < 1) {
    alert("Zero or Negative numbers are not allowed.");
  } else if (n > 100) {
    alert("Please enter a number between 1 and 100.");
  }
  container.innerHTML = "";
  createGrid(n);
});
