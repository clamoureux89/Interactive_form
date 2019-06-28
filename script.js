///Declare global variables
let nameField = document.getElementById("name")
let mailField = document.getElementById("mail")
let titleField = document.getElementById("title")
let sizeField = document.getElementById("size")
let designField = document.getElementById("design")
let colorField = document.getElementById("color")
let activitiesField = document.querySelector(".activities")
let zip = document.getElementById("zip")
let cvv = document.getElementById("cvv")
let creditcard = document.getElementById("cc-num")



///Upon loading focus on the first input field so user can start typing
nameField.focus()


///Validator for the name input field

nameField.addEventListener("focusout",()=>{
    console.log(nameField.value)
    valid = /^[a-zA-Z\s]+$/.test(nameField.value)
    if (valid) {
        nameField.style.backgroundColor = "lightgreen";
      }else{
        nameField.style.backgroundColor = "red";
      }
    console.log(nameField.value +"checked")
})


///Validator for the email field

mailField.addEventListener("focusout", ()=>{
    console.log(mailField.value)
    valid= /^[^@]+@[^@.]+\.[a-z]{3}$/i.test(mailField.value);
    if (valid) {
    mailField.style.backgroundColor = "lightgreen";
  }else{
      mailField.style.backgroundColor = "red"
  }
    console.log(mailField.value +"checked")
})


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


colorField.hidden = true
cornflower.hidden=true
darkslategrey.hidden=true
gold.hidden = true
tomato.hidden = true
steelblue.hidden = true
dimgrey.hidden = true


///Change available colors based on design chosen, if none revert back to none shown
designField.addEventListener("select", ()=>{
    if(designField.value = 'js puns'){
        colorField.hidden = false
        cornflower.hidden = false
        darkslategrey.hidden = false
        gold.hidden = false
        tomato.hidden = true
        steelblue.hidden = true
        dimgrey.hidden = true
    }if(designField.value = 'heart js'){
        colorField.hidden = false
        tomato.hidden = false
        steelblue.hidden = false
        dimgrey.hidden= false
        colorField.hidden = true
        cornflower.hidden=true
        darkslategrey.hidden=true
    }
})

let showcost = document.createElement('p')


cost = 0

activitiesField.addEventListener('change',(e)=>{
    let selectedcost = e.target.parentElement.textContent
    if (e.target.checked){
        index = selectedcost.indexOf(('$')+1)
        cost += parseInt(selectedcost.slice(index,))
    }
    else{
        index = selectedcost.indexOf(('$')+1)

        cost += parseInt(selectedcost.slice(index,))
    }
})
showcost.innerHTML = "<p>Total Cost : $" + cost + "</p>"
activitiesField.appendChild(showcost)



const payfield = document.getElementById("payment")
const selectcredit = document.getElementById("credit-card")
const selectpaypal = selectcredit.nextSibling
const selectbitcoin = selectpaypal.nextSibling

selectpaypal.style = "hidden"
selectbitcoin.style = "hidden"
payfield.addEventListener("change", (e) => {
    selectcredit.style = "hidden"
    selectpaypal.style = "hidden"
    selectbitcoin.style = "hidden"
    if(payfield.value === "Credit Card"){
        creditcard.style ==="block"
    }
    if(payfield.value === "Paypal"){
        paypal.style ==="block"
    }
    if(payfield.value === "Bitcoin"){
        bitcoin.style ==="block"
    }
}) 


creditcard.addEventListener("focusout", ()=>{
    console.log(creditcard.value)
    valid= /^[0-9]{16}$/i.test(creditcard.value);
    if (valid) {
    creditcard.style.backgroundColor = "lightgreen";
  }else{
      creditcard.style.backgroundColor = "red"
  }
    console.log(creditcard.value +"checked")
})

cvv.addEventListener("focusout", ()=>{
    console.log(cvv.value)
    valid= /^[0-9]{3}$/i.test(cvv.value);
    if (valid) {
    cvv.style.backgroundColor = "lightgreen";
  }else{
      cvv.style.backgroundColor = "red"
  }
    console.log(cvv.value +"checked")
})


zip.addEventListener("focusout", ()=>{
    console.log(zip.value)
    valid= /^[0-9]{6}$/i.test(zip.value);
    if (valid) {
    zip.style.backgroundColor = "lightgreen";
  }else{
      zip.style.backgroundColor = "red"
  }
    console.log(zip.value +"checked")
})