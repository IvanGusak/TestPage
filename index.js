import "./Style/styles.scss";

import { smooth_scroll, init } from  "./script/smooth/smoothScroll";

import { 
    renderHouse,
    httpGet,
    renderFlats,
    flatToggle,
    houseToggle,
	menuToggle
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
}


httpGet("json/apartment.json")
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
		smooth_scroll.init({
					header_id : "header",
					ignore_links: ["header", "footer"]
				});
	})

renderFlats(`Житловий масив \"Затишок Дніпра\"`, 1, false);
