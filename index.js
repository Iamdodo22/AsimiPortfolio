"use strict";


let modal = document.querySelector('div.fixed')

const openModal = ()=>{
    modal.style.opacity='100';
}

document.querySelector('img.fixed').addEventListener('click',openModal);

// to close the toggle button modal 

let close = document.querySelectorAll('.last li, .btn');


const closeModal=(element)=> {
    modal.style.opacity='0';
}

close.forEach((element) => {
    element.addEventListener('click', function () {
       closeModal()
    })
});