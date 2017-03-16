let check = {
    Name: (name) => {
        let letters = /^[A-Za-z]+$/; 
        return name.match(letters) ? true : false; 
    },
    Email: (email) => {
        let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
        return email.match(mailFormat) ? true : false;
    },
    Phone: (phone) => {
        let numberFormat = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        return phone.match(numberFormat) ? true : false;
    },
    Text: () => true,
    Topic: () => true
}

function submitForm() {
    let name = document.Form.Name;
    let email = document.Form.Email;
    let phone = document.Form.Phone;
    let topic = document.Form.Topic;
    let text = document.Form.Text;

    let obj = {
        "Name": name.value,
        "Email": email.value,
        "Phone": phone.value,
        "Topic": topic.value,
        "Text": text.value
    }
    for(let item in obj) {
        if(obj[item] == "") {
            document.Form[item].classList.add("error");
            document.Form[item].focus();
            return false       
        }
        else {
            if(!check[item](obj[item])) {
                document.Form[item].focus();
                document.Form[item].classList.add("error");
                return false;
            }
            document.Form[item].classList.remove("error"); 
        }
    }
    console.log(obj);
    name.value = phone.value = email.value = topic.value = text.value = "";
    return obj;
}

export { submitForm }