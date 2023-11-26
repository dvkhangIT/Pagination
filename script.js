const startBtn = document.getElementById("startBtn");
const endBtn = document.getElementById("endBtn");
const prevNext = document.querySelectorAll(".prevNext");
const numbers = document.querySelectorAll(".link");
let currentStep = 0;
function updateBtn() {
  if (currentStep === numbers.length - 1) {
    endBtn.disabled = true;
    prevNext[1].disabled = true;
  } else if (currentStep === 0) {
    startBtn.disabled = true;
    prevNext[0].disabled = true;
  } else {
    endBtn.disabled = false;
    startBtn.disabled = false;
    prevNext[1].disabled = false;
    prevNext[0].disabled = false;
  }
}
numbers.forEach((number, numberIndex) => {
  number.addEventListener("click", function (e) {
    e.preventDefault();
    currentStep = numberIndex;
    document.querySelector(".active").classList.remove("active");
    number.classList.add("active");
    updateBtn();
  });
});
prevNext.forEach((button) => {
  button.addEventListener("click", (e) => {
    currentStep += e.target.id === "next" ? 1 : -1;
    numbers.forEach((number, numberIndex) => {
      number.classList.toggle("active", numberIndex === currentStep);
      updateBtn();
    });
  });
});
startBtn.addEventListener("click", () => {
  document.querySelector(".active").classList.remove("active");
  numbers[0].classList.add("active");
  currentStep == 0;
  updateBtn();
  endBtn.disabled = false;
  prevNext[1].disabled = false;
});
endBtn.addEventListener("click", () => {
  document.querySelector(".active").classList.remove("active");
  numbers[numbers.length - 1].classList.add("active");
  currentStep == numbers.length - 1;
  updateBtn();
  startBtn.disabled = false;
  prevNext[0].disabled = false;
});
