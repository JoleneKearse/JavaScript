const emailCollectorForm = document.getElementById('emailCollector')
const congratsMsg = document.getElementById('congratsMsg')
const congratsStatement = document.getElementById('congratsStatement')

emailCollectorForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let myFormData = new FormData(event.target)
    let userName = myFormData.get('name')
    let userEmail = myFormData.get('email')
    let updatedHtmlContent = `
        <h2 class="form-title congrats">Congratulations, ${userName}!</h2>
        <img src="grill.png" alt="" class="gap">
        <p class="form-cta accent-txt uppercase">You're on your way to becoming a BBQ Master!</p>
        <p class="small">We'll send you weekly BBQ tips to ${userEmail}</p>`
    const signUpComplete = document.getElementById('signUpComplete')
    congratsMsg.classList.add('congrats')
    congratsStatement.classList.remove('accent-txt')
    signUpComplete.innerHTML = updatedHtmlContent
})

// reset the form on reload
document.getElementById('body').addEventListener('load', function() {
    let updatedForm = `
        <form id="emailCollector" class="flex" action="#" method="post">
            <input type="text" name="name" id="name" aria-label="name" placeholder="first name" required>
            <input type="text" name="email" id="email" aria-label="email" placeholder="email" required>
            <button type="submit" class="uppercase cta-btn">Register</button>
        </form>`
    emailCollectorForm.innerHTML = updatedForm
})