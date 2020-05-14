'use strict';
let menuHeaderIcon = document.querySelector('.header__menu-icon');
let menuHeader = document.querySelector('.header__menu');
menuHeaderIcon.addEventListener('click', menuBurger);
function menuBurger() {
    menuHeader.classList.toggle("header__menu_off");
}

let currentSlideState = 0;

const rightArrow = document.querySelector ('.customers__arrow-bottom');
const leftArrow = document.querySelector('.customers__arrow-top');
const sliderContainer = document.querySelector('.customers__people');
rightArrow.addEventListener('click', changeSliderToBottom)
leftArrow.addEventListener('click', changeSliderToTop);

function changeSliderToBottom() {
    if (currentSlideState > - 260){
    currentSlideState = currentSlideState - 260;
    sliderContainer.style.marginTop = `${currentSlideState}px`;
    }
}

function changeSliderToTop() {
    if (currentSlideState < 260 ){
    currentSlideState = currentSlideState + 260 ;
    sliderContainer.style.marginTop = `${currentSlideState}px`;
    }
}

let leftButton = document.querySelector('.plan__left-individual');
let leftContent = document.querySelector('.plan__right-starter');
let rightPro = document.querySelector('.plan__right-pro');
leftButton.addEventListener('click', highlightStarter);
function highlightStarter() {
    leftContent.classList.toggle("plan__right-starter_highlight");
    rightPro.classList.remove("plan__right-pro_highlight");
} ;

let rightButton = document.querySelector('.plan__left-company');
let rightContent = document.querySelector('.plan__right-pro');
let rightStarter = document.querySelector('.plan__right-starter');
rightButton.addEventListener('click', highlightPro);
function highlightPro() {
    rightContent.classList.toggle("plan__right-pro_highlight");
    rightStarter.classList.remove("plan__right-starter_highlight");
}
