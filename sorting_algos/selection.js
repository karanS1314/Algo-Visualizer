// jab selection sort button ko press kiya to ye sb functions honge
const selectionSortBtn = document.querySelector(".selectionSort");
selectionSortBtn.addEventListener('click',
  async () => { // async function to enable wait for bubble sort to complete
    disSortingBtn();
    disSizeSlider();
    disNewArrayBtn();
    await selection(); // jabtk selection sort khtm ni ho jati tb tk ruko
    // then enable the buttons
    // we cannot use setTimeout here as humko nhi pta ki kitna time lgega
    // ye await ke lie jp time hai vo mera waitToComplete leke aara hai
    // mera promise bolra hai ki itni derr rukja result aayega resolve krdunga
    // await bolra hai OK
    enSortingBtn();
    enSizeSlider();
    enNewArrayBtn();
  });

async function selection(){
    console.log('In selectionSort');
    const barArray = document.querySelectorAll(".bar");
    for(let i = 0; i < barArray.length; i++){
        console.log('In ' + i + ' i loop');
        let min_index = i;
        // color of the selected ith index to be swapped--> purple
        barArray[i].style.background = '#9932CC';
        for(let j = i + 1; j < barArray.length; j++){
            console.log('In ' + j + ' j loop');
            // as we iterate in jth loop --> crimson
            barArray[j].style.background = 'crimson';

            await waitToComplete(delay - 10);
            // modified the delay to some how visualize in adequate time
            // ek transition pe kitna time in the jth loop from j to j+1
            if(parseInt(barArray[j].style.height) < parseInt(barArray[min_index].style.height)){
                console.log('In if condition');
                if(min_index !== i){
                    // jo pehle min_index ko represent kr ra tha usko vaapis default krdo
                    barArray[min_index].style.background = 'turquoise';
                }
                min_index = j;
            }
            else{
                // agar jisse compare kr re ho vo min_index vale se bda hai to usko vaapis default
                barArray[j].style.background = 'turquoise';
                // agar ye change ni hua to mtlb ki vo red ka red hi reh jaega jo min_index hai
            }
        }
        await waitToComplete(delay - 10);
        // modified the delay to some how visualize in adequate time
        // ek transition pe kitna time in the ith loop from i to i+1
        swap(barArray[min_index], barArray[i]);
        // change the min bar index back to normal as it is swapped
        barArray[min_index].style.background = 'turquoise';
        // change the sorted barArray elements color to green
        barArray[i].style.background = '#1E90FF';
    }
}
