const button = document.getElementById(`convert-button`)
const select = document.getElementById(`currency-select`)


const convertValue = async () => {
  const inputValue = document.getElementById(`input-value`).value
  const realValueText = document.getElementById(`real-value-text`)
  const currencyValueText = document.getElementById(`currency-value-text`)

  const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

  const dolar = data.USDBRL.high
  const euro = data.EURBRL.high
  const bitcoin = data.BTCBRL.high

  realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputValue)

  if (select.value === `US$ Dólar americano`) {
    currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputValue / dolar)
  }

  if (select.value === `€ Euro`) {
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputValue / euro)
  }

  if (select.value === `₿ Bitcoin`) {
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(inputValue / bitcoin)
  }
}

const changeCurrency = () => {
  const currencyName = document.getElementById(`currency-name`)
  const currencyImg = document.getElementById(`currency-img`)

  if (select.value === `€ Euro`) {
    currencyName.innerHTML = `Euro`
    currencyImg.src = "./Assets/Euro.png"
  }

  if (select.value === `US$ Dólar americano`) {
    currencyName.innerHTML = `Dólar americano`
    currencyImg.src = "./Assets/eua.png"
  }

  if (select.value === `₿ Bitcoin`) {
    currencyName.innerHTML = `Bitcoin`
    currencyImg.src = "./Assets/Bitcoin.png"
  }
  convertValue()
}

button.addEventListener(`click`, convertValue)
select.addEventListener(`change`, changeCurrency)
