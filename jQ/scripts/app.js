"use strict";

// Radio input :checked & range input translate switch

const hiddenRadioEls = document.querySelectorAll(".hidden__radio");

hiddenRadioEls.forEach((element) => {
  element.addEventListener("change", (e) => {
    if (e.target.checked) {
      e.target.nextElementSibling.classList.remove("opacity");

      hiddenRadioEls.forEach((otherElements) => {
        if (otherElements !== e.target) {
          otherElements.nextElementSibling.classList.add("opacity");
        }
      });
    }
  });
});

// Slider

const rangeSlider = document.getElementById("slider");

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [2015, 2020],
    connect: true,
    step: 1/12,
    range: {
      min: 2014,
      max: 2023,
    },
  });
}
