const BASE_URL = "https://api.frankfurter.app/latest?from=usd&to=inr";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

window.addEventListener("load", () => {
  updateExchangeRate();
});

for (let select of dropdowns) {
  for(curr_code in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = curr_code;
    newOption.value = curr_code;
    if(select.name === "from" && curr_code  === "USD"){
      newOption.selected="selected";
    }  else if (select.name === "to" &&  curr_code === "INR"){
      newOption.selected="selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target); //target gives element in which change has occured
  });
}
const updateExchangeRate = async () =>  {
  
    let amount = document.querySelector(".amt input");
    let amtVal = amount.value;
    if(amtVal === "" || amtVal < 1){
      amtVal = 1;
      amount.value = "1";
    }
  const URL = `${BASE_URL}from=${fromCurr.value}&to=${toCurr.value}`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data.rates[toCurr.value];
  console.log(rate);
  
  let finalAmt = amtVal * rate;
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`

    };
  const updateFlag = (element) => {
    let curr_code = element.value;
    let countryCode = countryList[curr_code];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
  };

  btn.addEventListener("click" ,  (evt) =>{
    evt.preventDefault();
    updateExchangeRate();
});

    