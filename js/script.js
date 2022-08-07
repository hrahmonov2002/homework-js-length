let elForm = document.querySelector(".site-form");
let elInput = elForm.querySelector(".distance");

let elResultFoot = document.querySelector(".result-foot");
let elResultCycle = document.querySelector(".result-cycle");
let elResultCar = document.querySelector(".result-car");
let elResultTrain = document.querySelector(".result-train");

let MINUS = 0;
let SP_PEOPLE = 4.8;
let SP_CYCLE = 3.9;
let SP_CAR = 2.9;
let SP_TRAIN = 2.2;

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    if (elInput.value <= MINUS) {
       elResult.textContent = "Iltimos manfiy son kiritmang";
    }

  var people = Math.floor(elInput.value / SP_PEOPLE);
  var peopleMin = Math.floor((elInput.value / SP_PEOPLE - people)*60);
  

  var cycle = Math.floor(elInput.value / SP_CYCLE);
  var cycleMin = Math.floor((elInput.value / SP_CYCLE -cycle)*60);

  var car = Math.floor(elInput.value / SP_CAR);
  var carMin = Math.floor((elInput.value / SP_CAR -car)*60);

  var train = Math.floor(elInput.value / SP_TRAIN); 
  var trainMin = Math.floor((elInput.value / SP_TRAIN -train)*60);
  
   

  elResultFoot.textContent = `
  On foot ${people} hour ${peopleMin} min`;

  elResultCycle.textContent = `
  Cycle ${cycle} hour ${cycleMin} min`;

  elResultCar.textContent = `
  Car ${car} hour ${carMin} min`;

  elResultTrain.textContent = `
  Train ${train} hour ${trainMin} min`;

//   console.log(
//     elResult.textContent = `
//     On Foot ${people} hour ${peopleMin} min
//     Cycle ${cycle} hour ${cycleMin} min
//     Car ${car} hour ${carMin} min
//     Train ${train} hour ${trainMin} min `);
});