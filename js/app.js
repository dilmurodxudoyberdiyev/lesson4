const elInput = document.querySelector(".input")
const elButton = document.querySelector(".btn");
const elPiyoda = document.querySelector(".Piyoda");
const elVel = document.querySelector(".vel");
const elCar = document.querySelector(".car");
const elSam= document.querySelector(".sam");

//  Obektni tezliklari

let piyodaTez = 3.6;
let velTez = 20.1;
let mashTez = 70;
let samTez = 800;

//  O'zgaruvchilar

const elForm =document.querySelector(".wrapperForm");
elForm.addEventListener("submit"  ,  (e)=>{
    e.preventDefault();

    //  Piyoda tezliklari

    let elInputValue = elInput.value;
    let piyodaVaqt = elInputValue/piyodaTez;
    let piyodaVaqt1 = elInputValue % piyodaTez;
    elPiyoda.textContent = `${Math.round(piyodaVaqt)} soat ${Math.round(piyodaVaqt1)} minut`

// Velosipet tezliklari

    let velVaqti =  elInputValue/velTez;
    let velVaqti1 = elInputValue % velTez;
    elVel.textContent = `${Math.round(velVaqti)} soat ${Math.round(velVaqti1)}minut`;

    //  Mashina tezliklari

    let mashVaqti = elInputValue/mashTez;
    let mashVaqti1 = elInputValue % mashTez;
    elCar.textContent = `${Math.round(mashVaqti)} soat ${Math.round(mashVaqti1)}minut`

    // Samalyot tezliklari

    let samvaqti = elInputValue/samTez;
    let samvaqti1 = elInputValue % samTez
    elSam.textContent = `${samvaqti} soat ${samvaqti1} minut`
})







