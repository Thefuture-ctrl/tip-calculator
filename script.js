const billInput = document.getElementById("bill-field");
const peopleInput = document.getElementById("people-field");
const tipDisplay = document.getElementById("tip-amount");
const numberDisplay = document.getElementById("per-person");
const tipsFive = document.getElementById("tips Five");
const tipsTen = document.getElementById("tips Ten");
const tipsFif = document.getElementById("tips Fif");
const tipsTwe = document.getElementById("tips Twe");
const reset = document.querySelector("button");
const inputs = document.querySelectorAll("input");
const setInputFilter = document.getElementById ("bill-field");



billInput.addEventListener("input",bill);
peopleInput.addEventListener("input",people,bill);
tipsFive.addEventListener("click",tipOneFun);
tipsTen.addEventListener("click",tipTwoFun);
tipsFif.addEventListener("click",tipThreeFun);
tipsTwe.addEventListener("click",tipFourFun);

reset.addEventListener("click", function() {
     inputs.forEach(input => input.value ="");
     numberDisplay.innerHTML = "$0";
     tipDisplay.innerHTML = "$0";
});

function bill() {
    if (billInput.value>=1) {
     const one = parseFloat(billInput.value);
     tipDisplay.innerHTML = "$" + one;
    }else{
     tipDisplay.innerHTML = "$0";
    }
     
   
}
function tipOneFun() {
     tipDisplay.innerHTML = "$" + billInput.value*5/100;
}
function tipTwoFun() {
     tipDisplay.innerHTML = "$" + billInput.value*10/100;
}
function tipThreeFun() {
     tipDisplay.innerHTML = "$" + billInput.value*15/100;
}
function tipFourFun() {
     tipDisplay.innerHTML = "$" + billInput.value*20/100;
}

function people() {
     if (peopleInput.value>=1) {
          const perPerson = billInput.value/peopleInput.value;
          numberDisplay.innerHTML = "$"+ parseFloat(perPerson);
         }else{
          numberDisplay.innerHTML = "$0";
         }
          
}





