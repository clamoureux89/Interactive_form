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
titleField.addEventListener("change", ()=>{
    field = titleField.value
    console.log(field)
    document.getElementById("job_role_other").hidden = true
    if(field === "other"){
        document.getElementById("job_role_other").hidden = false
    }    
    }
)

///By default have all colors hidden




colorField.hide()
$("#color").prepend("<option value='other' selected>Choose a color</option>").prop("defaultSelected")


///Change available colors based on design chosen, if none revert back to none shown
$("#design").change(function() {
    if(designField.value === "js puns"){
        
        colorField.show()
        console.log("colorField shown")
        $("option[value='cornflowerblue']").show()
        console.log("cornflower shown")
        $("option[value='darkslategrey'").show()
        console.log("darkslategrey shown")
        $("option[value='gold'").show()
        console.log("gold shown")
        $("option[value='tomato'").hide()
        console.log("tomato hidden")
        $("option[value='steelblue'").hide()
        console.log("steelblue hidden")
        $("option[value='dimgrey'").hide()
        console.log("dimgrey hidden")
        console.log(designField.value + "selected")
    }else if(designField.value === "heart js"){
        colorField.hide()
        colorField.show()
        //$("#color").prepend("<option value='other' selected>Choose a color</option>")
        console.log("colorField shown")
        $("option[value='cornflowerblue']").hide()
        console.log("cornflower hidden")
        $("option[value='darkslategrey'").hide()
        console.log("darkslategrey hidden")
        $("option[value='gold'").hide()
        console.log("gold hidden")
        $("option[value='tomato'").show()
        console.log("tomato shown")
        $("option[value='steelblue'").show()
        console.log("steelblue shown")
        $("option[value='dimgrey'").show()
        console.log("dimgrey shown")
        console.log(designField.value + "selected")
    }else{
        colorField.hide()
    }
});

let showcost = document.createElement('p')

let morning = ["js-frameworks","express","build-tools"]
let afternoon = ["node","npm","js-libs"]

cost = 0

activitiesField.addEventListener('change',(e)=>{
    console.log(e.target.name)
    
    for(i=0;i<morning.length;i++) {if(e.target.name === morning [i]){
        /**schedule = selectedcost.match(/\d+/g)
        console.log("schedule" + schedule)
        first = schedule[0]
        console.log("first"+ first)
        second = schedule[1]
        console.log("second"+second)*/
        for(i=0;i<morning.length;i++){
            if(morning[i] != e.target.name){
                $("#"+morning[i]).prop("disabled",true)
                console.log(morning[i]+ "disabled")
        }
        
    }
}
    for(i=0;i<afternoon.length;i++){if (e.target.name === afternoon[i]){
        console.log(e.target.name)
        /**schedule = selectedcost.match(/\d+/g)
        console.log("schedule" + schedule)
        first = schedule[0]
        console.log("first"+ first)
        second = schedule[1]
        console.log("second"+second)*/
        for(i=0;i<afternoon.length;i++){
            if(afternoon[i] != e.target.name){
                $("#"+ afternoon[i]).prop("disabled",true)
                console.log(afternoon[i] + "disabled")
            }
        }
    }
}     
}})
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