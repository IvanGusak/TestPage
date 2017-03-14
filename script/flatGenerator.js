import { httpPost, httpGet } from "./"


function randomFlat(number) {
    let randomCapacity = Math.floor((Math.random()*5) + 1);
    let randomBalcony = Math.random() < 0.5 ? true : false;
    return {
        "number": number,
        "balcony": randomBalcony,
        "capacity": randomCapacity 
    }
}



function flatGenerator(url, capacity) {
    httpGet(url)
        .then(
            response => {
                let result = response;
                console.log(result[0]);
                for(let i = 1; i <= capacity; i++) {
                    
                    result[0].flats.push(randomFlat(i));
                }
                return result;
            },
            error => alert(`Rejected: ${error}`)
        )
        .then(
           result => {
                console.log(JSON.stringify(result));
           } 
        )
    

}


export { flatGenerator, randomFlat }