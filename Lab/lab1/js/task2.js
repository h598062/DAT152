const dateStartElm = document.getElementById("dateStart");
const dateEndElm = document.getElementById("dateEnd");
const submitBtn = document.getElementById("submit");
const outputElm = document.getElementById("output");

submitBtn.addEventListener("click", () => {
  const startDate = dateStartElm.valueAsNumber;
  const endDate = dateEndElm.valueAsNumber;

  const difference = endDate - startDate;
  //                                          ms          s     m    h    d
  const diffAsDays = Math.abs((difference / 1000) / 60 / 60 / 24);
  outputElm.textContent = `Antall dager mellom ${dateStartElm.valueAsDate.toDateString()} og ${dateEndElm.valueAsDate.toDateString()} er ${diffAsDays} dager`;
});
