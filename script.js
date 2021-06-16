"use strict";

window.addEventListener("load", sidenVises);

function sidenVises() {
    const burgerKnap = document.querySelector("#burger_knap");
    burgerKnap.addEventListener("click", toggleMenu);
} 

function toggleMenu() {
    const burgerKnap = this;
    const menu = document.querySelector("#menu");

    burgerKnap.classList.toggle("open");
    menu.classList.toggle("open");
}