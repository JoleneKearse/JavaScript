serviceBtnArr.forEach((button, index) => {
    button.addEventListener('click', () => {
        removeBtn.addEventListener('click', function(e) {
            if (e.target.classList.contains('remove')) {
                e.target.closest('div').remove()
            }
            total -= availableServices[index].price
            totalAmount.textContent = `\$${total}`
        })
    })
})

