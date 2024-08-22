const datoElm = document.getElementById("dato");
const localeElm = document.getElementById("localeInput");
const submitBtn = document.getElementById("submit");
const outputElm = document.getElementById("output");

submitBtn.addEventListener("click", () => {
  const dato = datoElm.valueAsDate;
  const locale = localeElm.value;
  try {
    const weekday = dato.toLocaleDateString(locale, {weekday: "long"});
    outputElm.innerText = `Dagen datoen ${dato.toLocaleDateString("nb-NO")} intreffer på er ${weekday} med locale ${locale}`;
  } catch (e) {
    if (e instanceof TypeError) {
      outputElm.innerText = "Vennligst oppgi en gyldig dato";
    } else if (e instanceof RangeError) {
      outputElm.innerText = `${locale} er ikke en gyldig locale-string`;
    } else {
      throw e;
    }
  }

});
