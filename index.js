"use strict";

let modal = document.querySelector('div.fixed')

const openModal = ()=>{
    modal.style.opacity='100';
}

const closeModal=()=> {
    modal.style.opacity='0';
}
 
const toggleButton = document.querySelector('img.fixed');

const toggleEvent = ()=>{
    if(modal.style.opacity === '100'){
        closeModal()
    }
    else{openModal()}
}

toggleButton.addEventListener('click', toggleEvent);

// to close the toggle button modal with the textcontent

let close = document.querySelectorAll('.last li, .btn');


close.forEach((element) => {
    element.addEventListener('click', function () {
       closeModal()
    })
});