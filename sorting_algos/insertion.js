// jab insertion sort button ko press kiya to ye sb functions honge
const insertionSortBtn = document.querySelector(".insertionSort");
insertionSortBtn.addEventListener('click',
  async () => { // async function to enable wait for bubble sort to complete
    disSortingBtn();
    disSizeSlider();
    disNewArrayBtn();
    await insertion(); // jabtk insertion sort khtm ni ho jati tb tk ruko
    // then enable the buttons
    // we cannot use setTimeout here as humko nhi pta ki kitna time lgega
    // ye await ke lie jp time hai vo mera waitToComplete leke aara hai
    // mera promise bolra hai ki itni derr rukja result aayega resolve krdunga
    // await bolra hai OK
    enSortingBtn();
    enSizeSlider();
    enNewArrayBtn();
  });

async function insertion() {
  console.log('In insertionSort');
  const barArray = document.querySelectorAll(".bar");
  // first bar ka color as sorted
  barArray[0].style.background = '#1E90FF';
  for (let i = 1; i < barArray.length; i++) {
    console.log('In ' + i + ' i loop');
    let j = i - 1; // i se pichle index se comparison shuru
    let key = barArray[i].style.height;
    // color
    barArray[i].style.background = 'crimson';

    await waitToComplete(delay + 10); // modified the delay to some how visualize in adequate time
    // delay for entering the while loop for each index

    while (j >= 0 && (parseInt(barArray[j].style.height) > parseInt(key))) { // peeche saare sorted hain i index ke elements islie while loop
      console.log('In while loop');
      // color
      barArray[j].style.background = 'crimson';
      swap(barArray[j + 1], barArray[j]); // agar j index j + 1 se bada hai to swap kr kr ke j+1 vale ko peeche daalte raho
      // aur uska color bhi change krte rho
      j--;

      await waitToComplete(delay + 20); // modified the delay to some how visualize in adequate time
      // delay for each jth transition
    }

    // jo saare elements hain peeche ke unka color reset to sorted after the while loop
    for (let k = i; k >= 0; k--) {
      if (barArray[k].style.background == '#1E90FF') break; // optimised selection sort
      barArray[k].style.background = '#1E90FF';
    }
  }
}
