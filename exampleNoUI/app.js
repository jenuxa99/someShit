const yearSlider = document.querySelector("#slider-date");

function timestamp(str) {
  return new Date(str).getTime();
}

noUiSlider.create(yearSlider, {
  tooltips: true,
  connect: true,
  step: 1/12,
  start: [timestamp("2015"), timestamp("2019")],
  range: {
    min: timestamp("2014"),
    max: timestamp("2024"),
  },
  // pips: {
  //   mode: "values",
  //   values: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
  //   density: 10,
  // },
  format: {
    to: function (value) {
      return value;
    },
    from: function (value) {
      return parseInt(value);
    },
  },
});

const dateValues = [
  document.getElementById("event-start"),
  document.getElementById("event-end"),
];

const noUItt = document.querySelector(".noUi-tooltip");

const formatter = new Intl.DateTimeFormat("ru", {
  year: "numeric",
  month: "long",
});

yearSlider.noUiSlider.on("update", function (values, handle) {
  dateValues[handle].innerHTML = formatter.format(new Date(+values[handle]));
});
