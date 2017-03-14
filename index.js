import "./Style/styles.scss";

import { 
    renderHouse,
    httpGet,
    renderFlats,
    flatToggle,
    houseToggle
 } from "./script/";





let flat;
let balcony;
let houses;
let button;

function getDom() {
	flat = document.getElementsByClassName("flat-toggle");
	balcony = document.getElementsByClassName("balcony-toggle");
	houses = document.getElementsByClassName("ecran2-img");

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

renderFlats(`Житловий масив \"Затишок Дніпра\"`, 1, false);
