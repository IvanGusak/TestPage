import { houseToggle } from "./";

function renderHouse(className, json) {
    let houses = json;
    let node = document.getElementsByClassName(className)[0];
    let innerNode = ""; 
    let output;

    innerNode += houses.map((house) => {
        return (
            `
            <div class="apart-box">
                <div class="ecran2-img">
                    <img id="houses" src="${ house.img }" alt='${ house.name }'>
                    <div class="triangle"></div>
                </div>
                <div class="side">
                    <p class="name">${ house.name }</p>
                    <p class="city">${ house.address.city }</p>
                    <p class="street">${ house.address.street }</p>
                    <p class="capacity">${ house.capacity }</p>
                    <a href="#apartments" class="button">Обрати квартиру</a>
                </div>
            </div>
            `
        )
    })
    output = innerNode.split(",").join("");
    node.innerHTML = output;
}

export { renderHouse }