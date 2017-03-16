import "./Style/styles.scss";

import $ from "./script/jquery-3.1.1.min.js";

import { 
    renderHouse,
    httpGet,
    renderFlats,
    flatToggle,
    houseToggle,
	menuToggle,
	submitForm
 } from "./script/";

let flat;
let balcony;
let houses;
let button;
let menu;



function getDom() {
	flat = document.getElementsByClassName("flat-toggle");
	balcony = document.getElementsByClassName("balcony-toggle");
	houses = document.getElementsByClassName("ecran2-img");
	menu = document.getElementById("menu");
	button = document.querySelector("#submit");
}

function attachEvent() {
	for (let elem of flat) {
		elem.addEventListener("click", flatToggle);
	}

	for (let elem of balcony) {
		elem.addEventListener("click", flatToggle);
	}

	for (let elem of houses) {
		elem.addEventListener("click", houseToggle);
	}

	menu.addEventListener("click", menuToggle);
	button.addEventListener("click", submitForm);
}


httpGet("/json/apartment.json")
	.then(
		response => renderHouse("container", response),
		error => alert(`Rejected: ${error}`)
	)
	.then(() => {
		getDom()
	})
	.then(() => {
		attachEvent()
	})
	.then(() => {
		$(function() {
			$('a[href*="#"]:not([href="#"])').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html, body').animate({
					scrollTop: target.offset().top
					}, 1000);
					return false;
				}
				}
			});
		});
	})

renderFlats(`Житловий масив \"Затишок Дніпра\"`, 1, false);
