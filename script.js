///Declare global variables
let nameField = document.getElementById("name")
let mailField = document.getElementById("mail")
let titleField = document.getElementById("title")
let sizeField = document.getElementById("size")
let designField = document.getElementById("design")
let colorField = $("#color")
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




colorField.hide()



///Change available colors based on design chosen, if none revert back to none shown
$("#design").change(function() {
    if(designField.value === "js puns"){
        colorField.hide()
        colorField.show()
        console.log("colorField shown")
        $("option[value='cornflower']").prop("disabled",false)
        console.log("cornflower shown")
        $("option[value='darkslategrey'").prop("disabled",false)
        console.log("darkslategrey shown")
        $("option[value='gold'").prop("disabled",false)
        console.log("gold shown")
        $("option[value='tomato'").prop("disabled",true)
        console.log("tomato hidden")
        $("option[value='steelblue'").prop("disabled",true)
        console.log("steelblue hidden")
        $("option[value='dimgrey'").prop("disabled",true)
        console.log("dimgrey hidden")
        console.log(designField.value + "selected")
    }else if(designField.value === "heart js"){
        colorField.hide()
        colorField.show()
        console.log("colorField shown")
        $("option[value='cornflower']").prop("disabled",true)
        console.log("cornflower hidden")
        $("option[value='darkslategrey'").prop("disabled",true)
        console.log("darkslategrey hidden")
        $("option[value='gold'").prop("disabled",true)
        console.log("gold hidden")
        $("option[value='tomato'").prop("disabled",false)
        console.log("tomato shown")
        $("option[value='steelblue'").prop("disabled",false)
        console.log("steelblue shown")
        $("option[value='dimgrey'").prop("disabled",false)
        console.log("dimgrey shown")
        console.log(designField.value + "selected")
    }else{
        colorField.hide()
    }
});

let showcost = document.createElement('p')



cost = 0

activitiesField.addEventListener('change',(e)=>{
    let selectedcost = e.target.parentElement.textContent
    if (e.target.checked){
        schedule = selectedcost.match(/\d+/g)
        console.log("schedule" + schedule)
        first = schedule[0]
        console.log("first"+ first)
        second = schedule[1]
        console.log("second"+second)
        activities = document.querySelectorAll("checkbox")
        for(i=0;i<activities.length;i++){
            if(activities[i].parentElement.textContent === selectedcost){
                return true
            }
            text = activities[i].parentElement.textContent
            scheduleother = text.match(/\d+/g)
            console.log(text)
            firstother = scheduleother[0]
            console.log("firstother"+ text + firstother)
            secondother = scheduleother[1]
            console.log("secondother" + text + secondother)
            if(firstother>=first && firstother<=second){
                activities[i].prop("disabled",true)
            }else if(secondother>=first && secondother<=second){
                activities[i].prop("disabled",true)
            }else if(firstother<=first && secondother>=second){
                activities[i].prop("disabled",true)
            }
        }

        index = selectedcost.indexOf(('$'))
        dollars = selectedcost.slice((index+1),)
        cost += parseInt(dollars)
        console.log("+" + dollars)
        console.log("cost:" + cost)
        showcost.innerHTML = "<p>Total Cost : $" + cost + "</p>"
    }
    else{
        index = selectedcost.indexOf(('$'))
        dollars = selectedcost.slice((index + 1),)
        cost -= parseInt(dollars)
        console.log("-" + dollars)
        console.log("cost:" + cost)
        showcost.innerHTML = "<p>Total Cost : $" + cost + "</p>"
    }
})
showcost.innerHTML = "<p>Total Cost : $" + cost + "</p>"
activitiesField.appendChild(showcost)



const payfield = $("#payment")
const selectcredit = payfield.next()
const selectpaypal = selectcredit.next()
const selectbitcoin = selectpaypal.next()


selectpaypal.hide()
selectbitcoin.hide()


$('#payment').change(function(){

    if(payfield.val() === "credit card"){
        selectcredit.show()
        selectpaypal.hide()
        selectbitcoin.hide()
        console.log("Show credit card")
    }
    if(payfield.val() === "paypal"){
        selectcredit.hide()
        selectpaypal.show()
        selectbitcoin.hide()
        console.log("Show paypal")
    }
    if(payfield.val() === "bitcoin"){
        selectcredit.hide()
        selectpaypal.hide()
        selectbitcoin.show()
        console.log("Show bitcoin")
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