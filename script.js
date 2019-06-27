///Declare global variables
let nameField = document.getElementById("name")
let mailField = document.getElementById("mail")
let titleField = document.getElementById("title")
let sizeField = document.getElementById("size")
let designField = document.getElementById("design")
let colorField = document.getElementById("color")
let activitiesField = document.querySelector(".activities")

///Upon loading focus on the first input field so user can start typing
nameField.focus()

///Create a general validator function which needs only a target and a base regex
function createListener(validator){
    return e =>{
        const text= e.target.textContent;
        let valid = validator(text);
        if (valid = false) {
            body.style.backgroundColor = "rgb(189, 86, 86)";
          }
        }
    }

///Validator for the name input field
function isValidUsername(username){
    return /^[a-z]+$/.test(username);
}

nameField.addEventListener("focusout", createListener(isValidUsername))


///Validator for the email field
function isValidEmail(email){
    return /^[^@]+@[^@.]+\.[a-z]{3}$/i.test(email);
}

mailField.addEventListener("focusout", createListener(isValidEmail))


///Add feature to other in job roles so a new input field is displayed when other is selected

document.getElementById("job_role_other").hidden = true
titleField.addEventListener("change", (e)=>{
    if(document.getElementsByName("user_title").textContent = 'other'){
        document.getElementById("job_role_other").hidden = false
    }
})

///By default have all colors hidden
colorField.hidden = true
let cornflower = colorField.firstChild
let darkslategrey =cornflower.nextSibling
let gold = darkslategrey.nextSibling
let tomato =gold.nextSibling
let steelblue =tomato.nextSibling
let dimgrey = steelblue.nextSibling

const HideColors = () => {
    colorField.hidden = true
    cornflower.hidden=true
    darkslategrey.hidden=true
    gold.hidden = true
    tomato.hidden = true
    steelblue.hidden = true
    dimgrey.hidden = true
}

HideColors()


///Change available colors based on design chosen, if none revert back to none shown
designField.addEventListener("change", (e)=>{
    if(e.target.textContent = 'js puns'){
        colorField.hidden = false
        cornflower.hidden = false
        darkslategrey.hidden = false
        gold.hidden = false
    }if(e.target.textContent = 'heart js'){
        colorField.hidden = false
        tomato.hidden = false
        steelblue.hidden = false
        dimgrey.hidden= false
    }else{
        HideColors()
    }
})

let showcost = document.createElement('p')

cost = 0

activitiesField.addEventListener('change',(e)=>{
    let selectedcost = e.target.parentElement.textContent
    if (e.target.checked){
        index = selectedcost.indexOf(('$')+1)
        cost += parseInt(selectedcost.slice(index))
    }
    else{
        index = selectedcost.indexOf(('$')+1)
        cost += parseInt(selectedcost.slice(index))
    }
})
showcost.innerHTML = "Total Cost : $" + cost
activitiesField.appendChild(showcost)



const payfield = document.getElementById("payment")
const creditcard = document.getElementById("credit-card")
const paypal = creditcard.nextSibling
const bitcoin = paypal.nextSibling

paypal.style = "hidden"
bitcoin.style = "hidden"
payfield.addEventListener("change", (e) => {
    creditcard.style = "hidden"
    paypal.style = "hidden"
    bitcoin.style = "hidden"
    if(e.value === "Credit Card"){
        creditcard.style ==="block"
    }
    if(e.value === "Paypal"){
        paypal.style ==="block"
    }
    if(e.value === "Bitcoin"){
        bitcoin.style ==="block"
    }
}) 