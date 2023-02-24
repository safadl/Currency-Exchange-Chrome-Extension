document.addEventListener("DOMContentLoaded", function () {
  const amount = document.getElementById("amount");
  const currency = document.getElementById("currency");
  const currency_from = document.getElementById("currency_from");
  const convert = document.getElementById("convert");
  const result = document.getElementById("result");

  const apiKey = "%API_KEY%";
  const apiURL = `https://api.api-ninjas.com/v1/exchangerate?pair=`;
  console.log("currency_from : ", currency_from);
  convert.addEventListener("click", () => {
    const amountTotal = amount.value;
    const currencyTotal = currency.value;
    const currency_fromTotal = currency_from.value;
    const url = apiURL + `${currency_fromTotal}_${currencyTotal}`;
    console.log("currency_from : ", currency_fromTotal);

    fetch(url, {
      headers: {
        "X-Api-Key": apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const rate = data.exchange_rate;
        const resultTotal = amountTotal * rate;
        result.innerHTML = amountTotal
          ? ` ${amountTotal} ${currency_fromTotal} = ${resultTotal.toFixed(
              2
            )} ${currencyTotal}`
          : "Please enter an amount";
      })
      .catch((error) => {
        console.error("Request failed:", error);
        result.innerHTML = "An error occured, please try again later";
      });
  });
});
