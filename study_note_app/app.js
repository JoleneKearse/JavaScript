const fontFamilyEl = document.getElementById('fontFamilyEl')
const fontSizeEl = document.getElementById('fontSizeEl')
const colorEl = document.querySelector('#colorEl')
const boldBtn = document.querySelector('#boldBtn')
const italicBtn = document.querySelector('#italicBtn')
const underlineBtn = document.querySelector('#underlineBtn')
const indentBtn = document.querySelector('#indentBtn')
const orderedListBtn = document.querySelector('#orderedListBtn')
const unorderedListBtn = document.querySelector('#unorderedListBtn')
const linkBtn = document.querySelector('#linkBtn')
const editor = document.querySelector('.editor')

// let selectedTxt = document.getSelection('selectedTxt')
// let selectedArea = document.importNode(document.querySelector('template').content, true).childNodes[0]
// let userSelection = ''
// let font


// apply bold, italic & underline font-style, unordered & ordered lists
boldBtn.addEventListener('click', () => {
    document.execCommand('bold')
})

italicBtn.addEventListener('click', () => {
    document.execCommand('italic')
})

underlineBtn.addEventListener('click', () => {
    document.execCommand('underline')
})

// NEED ANOTHER WAY TO COMPLETE, MAYBE STRING WITH BLANK SPACES?
indentBtn.addEventListener('click', () => {
    document.execCommand('indent', true, null)
})

orderedListBtn.addEventListener('click', () => {
    document.execCommand('insertOrderedList')
})

unorderedListBtn.addEventListener('click', () => {
    document.execCommand('insertUnorderedList')
})

linkBtn.addEventListener('click', () => {
    let url = document.getSelection()
    document.execCommand('insertHTML', false, `<a href="https://${url}" target="_blank">${url}</a>`)
})

colorEl.addEventListener('input', () => {
    let area = document.getSelection()
    area.execCommand('forecolor', false, colorEl.value)
})

// optionBtns.querySelectorAll('.option-btn').addEventListener('click', function handleClick(event) {
//     console.log(`user clicked: ${event.target}`)
//     if (optionBtns.classList.contains('active')) {
//         optionBtns.classList.remove('active')
//     } else {
//         optionBtns.classList.add('active')
//     }
// })

function selectArea() {
    userSelection = document.getSelection().toString()
    if (userSelection !== '') {
        console.log(userSelection)
    }
}

function changeFont(font) {
    selectArea()
    console.log(typeof selectedTxt)
    if (selectedTxt.value !== 'null') {
        selectedTxt.style.fontFamilyEl = this.value
    }
    
    
}
