import  { httpGet } from "./";

function renderFlats(houseName, capacity, balcony) {
    let dom = ``; 

    httpGet(`json/flats.json`)
        .then(
            response => {
                for (let house of response) {
                    if(house.name == houseName) {
                        dom += house.flats.map((room) => {
                            if(room.capacity == capacity && room.balcony == balcony) {
                                return `<div class="room-ceil">${ room.number }</div>`
                            } 
                        })
                    }
                }
                return dom;
            }
        )
        .then(result => {
            document.getElementsByClassName("rooms-table")[0].innerHTML = result.split(",").join("");
        })
    
}

export { renderFlats };