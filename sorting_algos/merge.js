// jab merge sort button ko press kiya to ye sb functions honge
const mergeSortBtn = document.querySelector(".mergeSort");
mergeSortBtn.addEventListener('click',
  async () => { // async function to enable wait for bubble sort to complete
    let barArray = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(barArray.length) - 1;
    disSortingBtn();
    disSizeSlider();
    disNewArrayBtn();
    await mergeSort(barArray, l, r); // jabtk merge sort khtm ni ho jati tb tk ruko
    // then enable the buttons
    // we cannot use setTimeout here as humko nhi pta ki kitna time lgega
    // ye await ke lie jp time hai vo mera waitToComplete leke aara hai
    // mera promise bolra hai ki itni derr rukja result aayega resolve krdunga
    // await bolra hai OK
    enSortingBtn();
    enSizeSlider();
    enNewArrayBtn();
  });

// MAIN MERGE SORT FUNCTION-----------------------------------------------------
async function mergeSort(barArray, l, r) {
  console.log('In mergeSort');
  if (l >= r) {
    // only one element
    return;
  }
  const m = l + Math.floor((r - l) / 2);
  console.log(`left=${l} mid=${m} right=${r}`);
  await mergeSort(barArray, l, m); // left portion ko leke aaja sort krke
  await mergeSort(barArray, m + 1, r); // right portion ko leke aaja sort krke
  await merge(barArray, l, m, r); // dono ko merge krde
}

// MERGE TWO COMPONENTS FUNCTION------------------------------------------------
async function merge(barArray, low, mid, high) {
  console.log('In merge()');
  console.log(`low=${low}, mid=${mid}, high=${high}`);
  const n1 = mid - low + 1; // left component size
  const n2 = high - mid; // right component size

  let left = new Array(n1); // new array of length left size
  let right = new Array(n2); // new array of length right size

  for (let i = 0; i < n1; i++) {
    await waitToComplete(delay); // har transition ke lie delay
    console.log('In merge left loop');

    barArray[low + i].style.background = 'crimson'; // left component ke har bar ka color change
    left[i] = barArray[low + i].style.height; // left new array mei ye left component saath hi saath copy
  }
  for (let i = 0; i < n2; i++) {
    await waitToComplete(delay); // har transition ke lie delay
    console.log('In merge right loop');

    barArray[mid + 1 + i].style.background = 'lightgreen'; // right component ke har bar ka color change
    right[i] = barArray[mid + 1 + i].style.height;  // right new array mei ye left component saath hi saath copy
  }
  await waitToComplete(delay); // left ka color change aur right ka color change ke baad delay

  let i = 0, j = 0, k = low; //*****
  while (i < n1 && j < n2) {
    await waitToComplete(delay); // left aur right new array mei se ek ek bar jo sbse choti hai usko compare krne ka delay
    console.log('In merge while loop');

    if (parseInt(left[i]) <= parseInt(right[j])) {
      console.log('In merge while loop if');
      // color
      if ((n1 + n2) === barArray.length) { // in the last while loop and need to show whole array as sorted
        barArray[k].style.background = '#1E90FF';
      } else {
        barArray[k].style.background = '#9932CC'; // sorted color of left + right component
      }

      barArray[k].style.height = left[i]; // kyuki left[i] <= right[j] islie k ki height chote ke equal
      i++; // left ka index ++ kyuki uska ek use hogya
      k++;
    } else {
      console.log('In merge while loop else');
      // color
      if ((n1 + n2) === barArray.length) { // in the last while loop and need to show whole array as sorted
        barArray[k].style.background = '#1E90FF';
      } else {
        barArray[k].style.background = '#9932CC'; // sorted color of left + right component
      }
      barArray[k].style.height = right[j]; // kyuki left[i] > right[j] islie k ki height chote ke equal
      j++; // right ka index ++ kyuki uska ek use hogya
      k++;
    }
  }
  while (i < n1) { // if left has un-used elements
    await waitToComplete(delay);
    console.log("In while if left is remaining");
    // color
    if ((n1 + n2) === barArray.length) { // in the last while loop and need to show whole array as sorted
      barArray[k].style.background = '#1E90FF';
    } else {
      barArray[k].style.background = '#9932CC'; // sorted color of left + right component
    }
    barArray[k].style.height = left[i];
    i++;
    k++;
  }
  while (j < n2) {
    await waitToComplete(delay);
    console.log("In while if right is remaining");
    // color
    if ((n1 + n2) === barArray.length) { // in the last while loop and need to show whole array as sorted
      barArray[k].style.background = '#1E90FF';
    } else {
      barArray[k].style.background = '#9932CC'; // sorted color of left + right component
    }
    barArray[k].style.height = right[j];
    j++;
    k++;
  }
}
