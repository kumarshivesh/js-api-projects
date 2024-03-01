const amountEntered = document.querySelector('.amount input')
const fromCurrencyElement = document.querySelector(".fromCurrency")
const toCurrencyElement = document.querySelector(".toCurrency")
const arrow = document.querySelector(".arrow")
const resultElement = document.querySelector(".result")
const getBtn = document.querySelector("button")
const converterContainer = document.querySelector('.converter-container')

// Array to populate the select tags with these countries
const countries = [
  { code: "AED", name: "AE" },
  { code: "AFN", name: "AF" },
  { code: "XCD", name: "AG" },
  { code: "ALL", name: "AL" },
  { code: "AMD", name: "AM" },
  { code: "ANG", name: "AN" },
  { code: "AOA", name: "AO" },
  { code: "AQD", name: "AQ" },
  { code: "ARS", name: "AR" },
  { code: "AUD", name: "AU" },
  { code: "AZN", name: "AZ" },
  { code: "BAM", name: "BA" },
  { code: "BBD", name: "BB" },
  { code: "BDT", name: "BD" },
  { code: "XOF", name: "BE" },
  { code: "BGN", name: "BG" },
  { code: "BHD", name: "BH" },
  { code: "BIF", name: "BI" },
  { code: "BMD", name: "BM" },
  { code: "BND", name: "BN" },
  { code: "BOB", name: "BO" },
  { code: "BRL", name: "BR" },
  { code: "BSD", name: "BS" },
  { code: "NOK", name: "BV" },
  { code: "BWP", name: "BW" },
  { code: "BYR", name: "BY" },
  { code: "BZD", name: "BZ" },
  { code: "CAD", name: "CA" },
  { code: "CDF", name: "CD" },
  { code: "XAF", name: "CF" },
  { code: "CHF", name: "CH" },
  { code: "CLP", name: "CL" },
  { code: "CNY", name: "CN" },
  { code: "COP", name: "CO" },
  { code: "CRC", name: "CR" },
  { code: "CUP", name: "CU" },
  { code: "CVE", name: "CV" },
  { code: "CYP", name: "CY" },
  { code: "CZK", name: "CZ" },
  { code: "DJF", name: "DJ" },
  { code: "DKK", name: "DK" },
  { code: "DOP", name: "DO" },
  { code: "DZD", name: "DZ" },
  { code: "ECS", name: "EC" },
  { code: "EEK", name: "EE" },
  { code: "EGP", name: "EG" },
  { code: "ETB", name: "ET" },
  { code: "EUR", name: "FR" },
  { code: "FJD", name: "FJ" },
  { code: "FKP", name: "FK" },
  { code: "FOK", name: "FO" },
  { code: "GBP", name: "GB" },
  { code: "GEL", name: "GE" },
  { code: "GGP", name: "GG" },
  { code: "GHS", name: "GH" },
  { code: "GIP", name: "GI" },
  { code: "GMD", name: "GM" },
  { code: "GNF", name: "GN" },
  { code: "GTQ", name: "GT" },
  { code: "GYD", name: "GY" },
  { code: "HKD", name: "HK" },
  { code: "HNL", name: "HN" },
  { code: "HRK", name: "HR" },
  { code: "HTG", name: "HT" },
  { code: "HUF", name: "HU" },
  { code: "IDR", name: "ID" },
  { code: "ILS", name: "IL" },
  { code: "IMP", name: "IM" },
  { code: "INR", name: "IN" },
  { code: "IQD", name: "IQ" },
  { code: "IRR", name: "IR" },
  { code: "ISK", name: "IS" },
  { code: "JEP", name: "JE" },
  { code: "JMD", name: "JM" },
  { code: "JOD", name: "JO" },
  { code: "JPY", name: "JP" },
  { code: "KES", name: "KE" },
  { code: "KGS", name: "KG" },
  { code: "KHR", name: "KH" },
  { code: "KMF", name: "KM" },
  { code: "KPW", name: "KP" },
  { code: "KRW", name: "KR" },
  { code: "KWD", name: "KW" },
  { code: "KYD", name: "KY" },
  { code: "KZT", name: "KZ" },
  { code: "LAK", name: "LA" },
  { code: "LBP", name: "LB" },
  { code: "LKR", name: "LK" },
  { code: "LRD", name: "LR" },
  { code: "LSL", name: "LS" },
  { code: "LTL", name: "LT" },
  { code: "LVL", name: "LV" },
  { code: "LYD", name: "LY" },
  { code: "MAD", name: "MA" },
  { code: "MDL", name: "MD" },
  { code: "MGA", name: "MG" },
  { code: "MKD", name: "MK" },
  { code: "MMK", name: "MM" },
  { code: "MNT", name: "MN" },
  { code: "MOP", name: "MO" },
  { code: "MRO", name: "MR" },
  { code: "MTL", name: "MT" },
  { code: "MUR", name: "MU" },
  { code: "MVR", name: "MV" },
  { code: "MWK", name: "MW" },
  { code: "MXN", name: "MX" },
  { code: "MYR", name: "MY" },
  { code: "MZN", name: "MZ" },
  { code: "NAD", name: "NA" },
  { code: "XPF", name: "NC" },
  { code: "NGN", name: "NG" },
  { code: "NIO", name: "NI" },
  { code: "NOK", name: "NO" },
  { code: "NPR", name: "NP" },
  { code: "NZD", name: "NZ" },
  { code: "OMR", name: "OM" },
  { code: "PAB", name: "PA" },
  { code: "PEN", name: "PE" },
  { code: "PGK", name: "PG" },
  { code: "PHP", name: "PH" },
  { code: "PKR", name: "PK" },
  { code: "PLN", name: "PL" },
  { code: "PYG", name: "PY" },
  { code: "QAR", name: "QA" },
  { code: "RON", name: "RO" },
  { code: "RSD", name: "RS" },
  { code: "RUB", name: "RU" },
  { code: "RWF", name: "RW" },
  { code: "SAR", name: "SA" },
  { code: "SBD", name: "SB" },
  { code: "SCR", name: "SC" },
  { code: "SDG", name: "SD" },
  { code: "SEK", name: "SE" },
  { code: "SGD", name: "SG" },
  { code: "SHP", name: "SH" },
  { code: "SLL", name: "SL" },
  { code: "SOS", name: "SO" },
  { code: "SRD", name: "SR" },
  { code: "SSP", name: "SS" },
  { code: "STN", name: "ST" },
  { code: "SYP", name: "SY" },
  { code: "SZL", name: "SZ" },
  { code: "THB", name: "TH" },
  { code: "TJS", name: "TJ" },
  { code: "TMT", name: "TM" },
  { code: "TND", name: "TN" },
  { code: "TOP", name: "TO" },
  { code: "TRY", name: "TR" },
  { code: "TTD", name: "TT" },
  { code: "TWD", name: "TW" },
  { code: "TZS", name: "TZ" },
  { code: "UAH", name: "UA" },
  { code: "UGX", name: "UG" },
  { code: "USD", name: "US" },
  { code: "UYU", name: "UY" },
  { code: "UZS", name: "UZ" },
  { code: "VEF", name: "VE" },
  { code: "VND", name: "VN" },
  { code: "VUV", name: "VU" },
  { code: "WST", name: "WS" },
  { code: "XAF", name: "CF" },
  { code: "XDR", name: "IM" },
  { code: "XOF", name: "CF" },
  { code: "YER", name: "YE" },
  { code: "ZAR", name: "ZA" },
  { code: "ZMW", name: "ZM" },
  { code: "ZWL", name: "ZW" }
]

// Showing countries from array to select tag
countries.forEach(country => {

  const option1 = document.createElement('option')
  option1.value = country.code
  option1.textContent = `${country.code}`
  fromCurrencyElement.appendChild(option1)
  
  const option2 = document.createElement('option')
  option2.value = country.code
  option2.textContent = `${country.code}`
  toCurrencyElement.appendChild(option2)
  /*
  //Here, I am clubbing the repeated color which was related to `value` and `textContent`
  const option1 = document.createElement('option')
  const option2 = document.createElement('option')

  option1.value = option2.value = country.code
  option1.textContent = option2.textContent = `${country.code}`

  fromCurrencyElement.appendChild(option1)
  toCurrencyElement.appendChild(option2)
  */

  //Setting default values of select tag
  fromCurrencyElement.value = "USD"
  toCurrencyElement.value = "INR"
})

const getExchangeRate = async() => {
  const amount = parseFloat(amountEntered.value.trim())
  console.log(amount)
  const fromCurrency = fromCurrencyElement.value
  console.log(fromCurrency)
  const toCurrency = toCurrencyElement.value
  console.log(toCurrency)

  resultElement.textContent = 'Fetching Exchange Rates...'

  try {
    // Fetch data from API
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
    console.log(url)
    const response = await fetch(url)
    const exchange_data = await response.json()
    console.log(exchange_data)
    const conversionRate = exchange_data.rates[toCurrency]
    console.log(conversionRate)
    if(typeof conversionRate === 'undefined'){
      resultElement.textContent = 'Exchange rate data is not avaiable for selected countries!!!'
    } else {
      const convertedAmount = (amount * conversionRate).toFixed(2)
      console.log(convertedAmount)
      resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`
    }
  } catch (error) {
    converterContainer.innerHTML = `<h1>Error while fetching exchange rates!!!</h1>`
  }
}

function loadFlag(element) {
  for (let country of countries) {
    if (country.code === element.value) {
      let imgTag = element.parentElement.querySelector("img");
      imgTag.src = `https://flagcdn.com/48x36/${country.name.toLowerCase()}.png`;
      break; // Once the matching country is found, no need to continue looping
    }
  }
}

// Fethcing exchange rate when user clicks on the `getBtn` button
getBtn.addEventListener('click', (e) => {
  e.preventDefault()
  // const amountValue = amountEntered.value.trim()
  // console.log(amountValue)
  getExchangeRate()
})

arrow.addEventListener("click", () => {
  let tempCode = fromCurrencyElement.value;
  fromCurrencyElement.value = toCurrencyElement.value;
  toCurrencyElement.value = tempCode;
  loadFlag(fromCurrencyElement);
  loadFlag(toCurrencyElement);
  getExchangeRate();
});

// You need to add event listeners to the select elements to trigger the `loadFlag` function whenever the values change.

// Event listener for fromCurrencyElement change
fromCurrencyElement.addEventListener('change', (e) => {
  loadFlag(e.target);
});

// Event listener for toCurrencyElement change
toCurrencyElement.addEventListener('change', (e) => {
  loadFlag(e.target);
});

// Fetching exchange rate when user load the window
window.addEventListener("load", () => {
  getExchangeRate();
});