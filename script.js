const currentNum = document.getElementById("number");
const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");
const decreaseBtn = document.getElementById("decrease");

let count = 0;

// Update UI based on current state
function updateDisplay() {
  currentNum.innerHTML = count;

  // Disable decrease button when count reaches 0
  decreaseBtn.disabled = count <= 0;
}

// Increase counter
increaseBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

// Decrease counter (no negative values allowed)
decreaseBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
  }
  updateDisplay();
});

// Reset counter to zero
resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});

// Initial render
updateDisplay();
