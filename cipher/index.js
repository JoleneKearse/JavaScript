const textInput = document.getElementById('textInput')
const keyInput = document.getElementById('keyInput')
const resultMsg = document.getElementById('resultText')
const encodeBtn = document.getElementById('encodeBtn')
const decodeBtn = document.getElementById('decodeBtn')
const resetBtn = document.getElementById('resetBtn')



// ENSURE FORM IS CLEAR ON LOAD AND WHEN RESET BTN CLICKED
document.getElementById('myForm').addEventListener('load', (event) => {
    console.log('reloaded')
    textInput.value = ''
    textInput.textContent = ''
    keyInput.value = ''
    keyInput.textContent = ''
    console.log(textInput.value)
    console.log(keyInput.value)
    document.location.reload(true)
}) 


// CRYTOGRAPHY FUNCTIONS



// ADD CLICK EVENTS TO TRIGGER FUNCTIONS
encodeBtn.addEventListener('click', function() {
    console.log('decode clicked') 
})

decodeBtn.addEventListener('click', function() {
    console.log('decode clicked')
}) 

resetBtn.addEventListener('click', function() {
    console.log('reloaded')
    textInput.value = ''
    textInput.textContent = ''
    keyInput.value = ''
    keyInput.textContent = ''
    console.log(textInput.value)
    console.log(keyInput.value)
    document.location.reload(true)
}) 