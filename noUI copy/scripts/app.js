document.addEventListener("DOMContentLoaded", () => {

  const yearSlider = document.getElementById("r-slider");

  noUiSlider.create(yearSlider, {
    start: [2014, 2023],
    tooltips: true,
    connect: true,
    padding: 0,
    range: {
      min: 2014,
      max: 2023,
    },
    pips: {
      mode: "values",
      values: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
      density: -1,
    },
    format: {
      to: function (value) {
        return parseInt(value);
      },
      from: function (value) {
        return parseInt(value);
      },
    },
    step: 1/12,
  });

  const monthSlider = document.getElementById("m-slider");

  noUiSlider.create(monthSlider, {
    start: [2014, 2023],
    tooltips: true,
    connect: true,
    padding: 0,
    range: {
      min: 2014,
      max: 2023,
    },
    pips: {
      mode: "values",
      values: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
      density: -1,
    },
    format: {
      to: function (value) {
        return parseInt(value);
      },
      from: function (value) {
        return parseInt(value);
      },
    },
    step: 1 / 12,
  });
});
