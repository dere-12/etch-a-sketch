const container = document.querySelector(".container");
createGrid();

function getRandomNumber() {
  return Math.floor(Math.random() * 256);
}

function createGrid(n = 16) {
  // n = number of squares per side(like 5x5, 16x16...)
  const containerWidth = 550;
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
      const targetElement = event.target;
      targetElement.style.backgroundColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;

      const computedStyle = window.getComputedStyle(targetElement); // Returns the computed style for an element
      let opacity = computedStyle.getPropertyValue("opacity");
      // getPropertyValue method is a read-only method, returns the computed style properties after all css rules have been applied, including external css.
      if (opacity >= 0.1) {
        targetElement.style.opacity = opacity - 0.1;
      }
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
  } else if (isNaN(n)) {
    alert("You either canceled the prompt or submitted an empty value.");
  } else {
    container.innerHTML = "";
    createGrid(n);
  }
});
