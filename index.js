// using Document Object Model and jQuery
function disSortingBtn() { // jab koi sorting in process hai to bnd krna pdega baaki buttons ko
  // taaki usable na ho ye
  // $(".bubbleSort").prop('disabled', true);
  // $(".insertionSort").prop('disabled', true);
  // $(".mergeSort").prop('disabled', true);
  // $(".selectionSort").prop('disabled', true);
  document.querySelector(".bubbleSort").disabled = true;
  document.querySelector(".insertionSort").disabled = true;
  document.querySelector(".mergeSort").disabled = true;
  document.querySelector(".selectionSort").disabled = true
}

function disSizeSlider() {
  document.querySelector("#arr_size").disabled = true;
}

function disNewArrayBtn() {
  document.querySelector(".newArray").disabled = true;
}
document.querySelector(".reset").disabled = true; // reset function is only on during the sorting algo running
// deafult reset is of
function disResetBtn() {
  document.querySelector(".reset").disabled = true; // after running sorting algos reset will be enable 
}
// **speed slider ko include ni kiya kyuki we are allowing that to happen
// during the sorting process

function enSortingBtn() { // jab kuch ni hora to enable to use these buttons
  document.querySelector(".bubbleSort").disabled = false;
  document.querySelector(".insertionSort").disabled = false;
  document.querySelector(".mergeSort").disabled = false;
  document.querySelector(".selectionSort").disabled = false;
}

function enSizeSlider() {
  document.querySelector("#arr_size").disabled = false;
}

function enNewArrayBtn() {
  document.querySelector(".newArray").disabled = false;
}

function enResetBtn() {
  document.querySelector(".reset").disabled = false; // while running sorting algos reset will be enable
}

// DELAY COMPONENT - SPEED OF SORTING-------------------------------------------
// input in milisec and used in async functions to wait the other functions until its completed
function waitToComplete(milisec) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('')
    }, milisec);
  })
}
// default delay time for waitToComplete
let delay = 260;
// speed_input slider se delay value input se leli
let delayValue = document.querySelector('#speed_input');
// event listener to adjust the delay time according to inout
delayValue.addEventListener('input', () => { // **used arrow function , it gives global scope
  delay = 310 - parseInt(delayValue.value);
});

// SIZE OF THE ARRAY------------------------------------------------------------
// length of the array
let arrayLength = document.querySelector('#arr_size');
// take the arrayLength and make a new array of bars
arrayLength.addEventListener('input', () => {
  genNewArray(parseInt(arrayLength.value)); // --> implemented in generating array
});

// GENERATING ARRAY / BARS-------------------------------------------------------
// empty array initialise
let array = [];
// jab site pe newly visit krenge and then koi input ni hoga size ka
// to ek default array generate and page pe show hone ke lie
genNewArray();
// array ko uske size ke hisaab se generate krdo
function genNewArray(noOfBars = 60) { // 50 is the default size as u visit site
  deleteOldArray(); // purane vale ko frontend se hataane ke lie

  // creating new array of random numbers of length noOfBars --> just creating int array in the memory
  array = [];
  for (let i = 0; i < noOfBars; i++) {
    array.push(Math.floor(Math.random() * 280) + 5);
  }

  // select the fiv #bars element
  const bars = document.querySelector('#bars');

  // create multipe element div by creating single bar of array[i] height
  // and flex width and then appending that element to the class
  for (let i = 0; i < noOfBars; i++) {
    const bar = document.createElement("div");
    bar.style.height = `${array[i]*2}px`; // $ sign is used to access the variables , here array[i] is variable
    bar.classList.add('bar');
    if (noOfBars < 14) {
      bar.innerHTML = `${array[i]}`;
      bar.classList.add('smallest-flex-item');
    } else if (noOfBars < 30) {
      bar.classList.add('small-flex-item');
    } else if (noOfBars <= 60) {
      bar.classList.add('medium-flex-item');
    } else {
      bar.classList.add('flex-item');
    }
    bars.appendChild(bar);
  }
}

// delete all the previous bars so that new can be added
function deleteOldArray() {
  const bar = document.querySelector("#bars");
  bar.innerHTML = '';
}

// Selecting newarray button from DOM and adding eventlistener
let newArray = document.querySelector(".newArray");
newArray.addEventListener("click", () => {
  enSortingBtn();
  enSizeSlider();
  genNewArray(arrayLength.value);
});

// UTILITY FUNCTIONS FOR SORTING------------------------------------------------
// swap function to implement swap of the bars in the frontend
function swap(b1, b2) {
  console.log('In swap()');

  let temp = b1.style.height;
  b1.style.height = b2.style.height;
  b2.style.height = temp;
}
