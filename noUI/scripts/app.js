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

document.addEventListener("DOMContentLoaded", () => {
  const yearSlider = document.getElementById("y-slider");

  function timestamp(str) {
    return new Date(str).getTime();
  }

  // noUiSlider.create(yearSlider, {
  //   start: [2014, 2023],
  //   tooltips: true,
  //   connect: true,
  //   padding: 0,
  //   range: {
  //     min: 2014,
  //     max: 2023,
  //   },
  //   step: 1 / 12,
  //   pips: {
  //     mode: "values",
  //     values: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  //     density: -1,
  //   },
  //   format: {
  //     to: function (value) {
  //       return parseInt(value);
  //     },
  //     from: function (value) {
  //       return parseInt(value);
  //     },
  //   },
  // });

  noUiSlider.create(yearSlider, {
    start: [timestamp("2011"), timestamp("2015")],
    tooltips: true,
    connect: true,
    padding: 0,
    range: {
      min: timestamp("2010"),
      max: timestamp("2023"),
    },
    step: 7 * 24 * 60 * 60 * 1000,
    format: {
      to: function (value) {
        return value;
      },
      from: function (value) {
        return parseInt(value);
      },
      decimals: 0,
    },
  });

  //   const yearSlider = document.getElementById("y-slider");
  //   function timestamp(str) {
  //     return new Date(str).getTime();
  //   }

  //   noUiSlider.create(yearSlider, {
  //     // Create two timestamps to define a range.
  //     range: {
  //       min: timestamp("2010"),
  //       max: timestamp("2016"),
  //     },

  //     // Steps of one week
  //     step: 7 * 24 * 60 * 60 * 1000,

  //     // Two more timestamps indicate the handle starting positions.
  //     start: [timestamp("2011"), timestamp("2015")],

  //     // No decimals
  //     format: wNumb({
  //       decimals: 0,
  //     }),
  //   });

});
