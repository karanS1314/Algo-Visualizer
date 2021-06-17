// using Document Object Model and jQuery
function disSortingBtns() { // jab koi sorting in process hai to bnd krna pdega baaki buttons ko
  // taaki usable na ho ye
  $(".bubbleSort").prop('disabled', true);
  $(".insertionSort").prop('disabled', true);
  $(".mergeSort").prop('disabled', true);
  $(".selectionSort").prop('disabled', true);
  // document.querySelector().disabled = true;
  // document.querySelector(".insertionSort").disabled = true;
  // document.querySelector(".mergeSort").disabled = true;
  // document.querySelector(".selectionSort").disabled = true
}

function disSizeSlider() {
  document.querySelector("#arr_sz").disabled = true;
}

function disNewArrayBtn() {
  document.querySelector(".newArray").disabled = true;
}
// **speed slider ko include ni kiya kyuki we are allowing that to happen
// during the sorting process

function enSortingBtns() { // jab kuch ni hora to enable to use these buttons
  $(".bubbleSort").prop('disabled', false);
  $(".insertionSort").prop('disabled', false);
  $(".mergeSort").prop('disabled', false);
  $(".selectionSort").prop('disabled', false);
}

function enSizeSlider() {
  document.querySelector("#arr_size").disabled = false;
}

function enNewArrayBtn() {
  document.querySelector(".newArray").disabled = false;
}

// DELAY COMPONENT - SPEED OF SORTING
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
  delay = 320 - parseInt(delayValue.value);
});

// SIZE OF THE ARRAY
// length of the array
let arrayLength = document.querySelector('#arr_size');
// take the arrayLength and make a new array of bars
arrayLength.addEventListener('input', () => {
  genNewArray(parseInt(arrayLength.value)); // --> implemented in generating array
});

// GENERATING ARRAY
// empty array initialise
let array = [];
// jab site pe newly visit krenge and then koi input ni hoga size ka
// to ek default array generate and page pe show hone ke lie
genNewArray();
// array ko uske size ke hisaab se generate krdo
function genNewArray(noOfBars = 100) { // 50 is the default size as u visit site
  deleteOldArray(); // purane vale ko frontend se hataane ke lie

  // creating new array of random numbers of length noOfBars --> just creating int array in the memory
  array = [];
  for (let i = 0; i < noOfBars; i++) {
    array.push(Math.floor(Math.random() * 250) + 5);
  }

  // select the fiv #bars element
  const bars = document.querySelector('#bars');

  // create multipe element div by adding class
  for (let i = 0; i < noOfBars; i++) {
    const bar = document.createElement("div");
    bar.style.height = `${array[i]*2}px`;
    bar.classList.add('bar');
    bar.classList.add('flex-item');
    bar.classList.add(`barNodocument.querySelector{i}`);
    bars.appendChild(bar);
  }
}


// Helper function to delete all the previous bars so that new can be added
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
