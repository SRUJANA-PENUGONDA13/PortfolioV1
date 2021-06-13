// Elements
const sendMailForm = document.querySelector('#sendMail')
const nameInput = document.querySelector('#name-input')
const mailInput = document.querySelector('#mail-input')
const textInput = document.querySelector('#text-input')
const messagebtn = document.querySelector('#message')
thanksMsg = document.getElementById('thanks')

nameInput.addEventListener('input', ()=>
{
    thanksMsg.innerHTML = ""
    messagebtn.removeAttribute('disabled')
})

sendMailForm.addEventListener('submit', (e)=>
{
    e.preventDefault()
    messagebtn.setAttribute('disabled','disabled')
    message = { "senderName" : nameInput.value, "receiverName" : "Srujana" ,"mail" : mailInput.value , "message" : textInput.value }
    url = 'https://srujana-mail-service.herokuapp.com/'+'mail'+'/'+'srujanapenugonda1318@outlook.com'+'/'+'Portfolio Feedback'+'/'+JSON.stringify(message)
    var xhttp = new XMLHttpRequest()
    xhttp.open("GET",url, true)
    xhttp.send()  
    nameInput.value = ''
    mailInput.value = ''
    textInput.value = ''  
    thanksMsg.style.fontSize = "3em";
    thanksMsg.innerHTML = "Thank You"
})