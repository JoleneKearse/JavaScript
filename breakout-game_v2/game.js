const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
let x = canvas.width / 2
let y = canvas.height - 5
let dx = 2
let dy = -2
// const ballWidth = 5vw

function draw() {
    ctx.beginPath()
    ctx.arc(x, y, 10, 0, Math.PI * 2)
    ctx.fillStyle = "#FB4B4E"
    ctx.fill()
    ctx.closePath()
    x += dx
    y += dy
}

setInterval(draw, 10)