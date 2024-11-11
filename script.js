{
  const rates = {
    PL: 4.3,
    EUR: 1,
    USD: 1.1,
    CNY: 7.3,
  };

  const form = document.querySelector(".js-form");
  const renderField = document.querySelector(".js-renderValue");
  const currencyFrom = document.querySelector(".js-fromCurrency");
  const currencyTo = document.querySelector(".js-toCurrency");
  const inputNumber = document.querySelector(".js-value");

  function handleSubmit(e) {
    e.preventDefault(e);
    const currencyFromValue = currencyFrom.value;
    const currencyToValue = currencyTo.value;
    const inputNumberValue = inputNumber.value;

    const isValid = validateCurrency(
      currencyFromValue,
      currencyToValue,
      inputNumberValue
    );

    isValid
      ? convertCurrency(currencyFromValue, currencyToValue, inputNumberValue)
      : null;
  }

  function validateCurrency(currencyFrom, currencyTo, inputNumberValue) {
    if (inputNumberValue === "") {
      renderField.innerText = "You should give a value";
      return false;
    }

    if (currencyFrom === currencyTo) {
      renderField.innerText =
        "The currences should be diffrent from each other";
      return false;
    }
    return true;
  }

  function convertCurrency(
    currencyFromValue,
    currencyToValue,
    inputNumberValue
  ) {
    const numberValue = parseFloat(inputNumberValue);
    console.log(numberValue);
    const result = (
      (numberValue / rates[currencyFromValue]) *
      rates[currencyToValue]
    ).toFixed(2);

    render(result);
  }

  function render(renderValue) {
    renderField.classList.add = "form__equalRender";
    renderField.innerHTML = `<p>${renderValue}</p>`;
  }

  function clearResult() {
    if (inputNumber.value === "") renderField.innerHTML = null;
  }

  form.addEventListener("submit", handleSubmit);
  inputNumber.addEventListener("input", clearResult);
}
