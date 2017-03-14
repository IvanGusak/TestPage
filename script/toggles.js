import { renderFlats } from "./";

function flatToggle(event) {
    let houseName = document.getElementsByClassName("house-name")[0].innerText;
    let preTarget = document.getElementsByClassName("flat-toggle active")[0];
    let preTargetList = preTarget.classList;
    let currTargetList = event.target.classList;
    let number = event.target.innerText.split("")[0];
    let bool = false;
    let output = "";
    let balcony = document.getElementsByClassName("balcony-toggle")[0];
    
    if(currTargetList.contains("flat-toggle")) {
        preTargetList.toggle("active");
    }
    else {
        output = (event.target.innerText == "так") ? `  ні` : "так";
        event.target.innerText = output;
        number = preTarget.innerText.split("")[0];
    }

    bool = (balcony.innerText == "так") ? true : false;
    
    currTargetList.toggle("active"); 
  
    renderFlats(houseName, number, bool);          
}

function houseToggle() {
    let header = document.getElementsByClassName("house-name")[0];
    let number = document.getElementsByClassName("flat-toggle active")[0].innerText.split("")[0];
    let balcony = document.getElementsByClassName("balcony-toggle")[0].innerText;
    let preTarget = document.getElementsByClassName("ecran2-img active")[0];
    let elem = event.currentTarget;
    let img = elem.childNodes[1] || document.getElementsByClassName("houses")[0];
    let houseName = img.getAttribute("alt");

    if(preTarget) {
        preTarget.classList.toggle("active");
    }
    
    elem.classList.toggle("active");
    header.innerText = houseName;
    renderFlats(houseName, number, (balcony == "так") ? true : false);
} 

export { flatToggle, houseToggle };
