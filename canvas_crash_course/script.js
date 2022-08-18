const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// ctx.fillStyle = '#0099FF'
// ctx.fillRect(20, 20, 150, 100)
// ctx.fillStyle = '#0067D7'
// ctx.fillRect(200, 20, 150, 100)

// ctx.lineWidth = 5
// ctx.strokeStyle = '#FB4B4E'
// ctx.strokeRect(400, 200, 150, 100)

// ctx.clearRect(25, 25, 140, 90)

// ctx.fillStyle = '#232323'
// ctx.font = '30px Arial'
// ctx.fillText('Hello Elvira', 400, 50)

// ctx.lineWidth = 1.5
// ctx.strokeStyle = '#F886BB'
// ctx.strokeText('Goodbye Pig!', 400, 100)



// triangle paths
// ctx.beginPath()
// ctx.moveTo(50, 50)
// ctx.lineTo(150, 50)
// ctx.lineTo(100, 200)
// ctx.closePath()
// ctx.fillStyle = '#679B00'
// ctx.fill()



// ctx.beginPath()
// ctx.moveTo(150, 200)
// ctx.lineTo(250, 200)
// ctx.lineTo(200, 50)
// ctx.closePath()
// ctx.fillStyle = '#FB4B4E'
// ctx.fill()

// // rectangle path
// ctx.beginPath()
// ctx.rect(300, 50, 150, 100)
// ctx.fillStyle ='teal'
// ctx.fill()


// smiley face
// ctx.beginPath()
// const centerX = canvas.width / 2
// const centerY = canvas.height / 2
// // head
// ctx.arc(centerX, centerY, 200, 0, Math.PI * 2)
// // mouth
// ctx.moveTo(centerX + 100, centerY)
// ctx.arc(centerX, centerY, 100, 0, Math.PI, false)
// // left eye
// ctx.moveTo(centerX - 60, centerY - 80)
// ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2)
// // right eye
// ctx.moveTo(centerX + 100, centerY - 80)
// ctx.arc(centerX + 80, centerY - 80, 20, 0, Math.PI * 2)

// ctx.stroke()



// ANIMATIONS: repaint the canvas over & over, changing positions each time
// const circle = {
//     x: 200,
//     y: 200,
//     size: 30, // radius
//     dx: 5, // increment for movements
//     dy: 4
// }

// function drawCircle() {
//     ctx.beginPath()
//     ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2)
//     ctx.fillStyle = '#65B1F3'
//     ctx.fill()
// }

// function update() {
//     // without this, the circle will remain
//     clearRect(0, 0, canvas.width, canvas.height)
//     drawCircle()
//     // change position
//     circle.x += circle.dx
//     // this function animates it and takes a callback, which is update
//     requestAnimationFrame(update)
// }

// update()

ctx.beginPath();
ctx.moveTo(75, 50);
ctx.lineTo(100, 75);
ctx.lineTo(100, 25);
ctx.fill();