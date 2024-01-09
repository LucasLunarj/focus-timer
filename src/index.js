//buttons
const treeButton = document.querySelector('.tree-button')
const rainButton = document.querySelector('.rain-button')
const fireButton = document.querySelector('.fire-button')
const musicMenu = document.querySelector('.music-menu')

const forestSound = new Audio('../assets/sounds/Floresta.wav')
const rain = new Audio('../assets/sounds/Chuva.wav')
const fire = new Audio('../assets/sounds/Lareira.wav')
const cafeteria = new Audio('../assets/sounds/Cafeteria.wav')
const timerFinishedSound = new Audio('../assets/sounds/timer-sound.mp3')



const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')

let onOff = false
let timeout;
const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')




start.addEventListener('click', startTimer)



function startTimer() {

    let secondsValue = Number(seconds.textContent)
    let minutesValue = Number(minutes.textContent)

    secondsValue--



    seconds.textContent = `${String(secondsValue).padStart(2, '0')}`

    console.log(secondsValue)
    timeout = setTimeout(startTimer, 1000)



    if (secondsValue == -1) {
        seconds.textContent = 59
        minutesValue = minutesValue - 1
        minutes.textContent = `${String(minutesValue).padStart(2, '0')}`
    }

    if (secondsValue <= 0 && minutesValue < 0) {
        stopTimer()
    }


}



stop.addEventListener('click', stopTimer)

function stopTimer() {
    minutes.textContent = `00`
    seconds.textContent = `00`
    clearTimeout(timeout)
}

plus.addEventListener('click', increase)

function increase() {
    let minutesData = Number(minutes.textContent)
    if (minutesData == 60) {
        return
    }

    minutesData = minutesData + 5

    minutes.textContent = `${String(minutesData).padStart(2, '0')}`


}

minus.addEventListener('click', decrease)

function decrease() {
    let minutesData = Number(minutes.textContent)
    if (minutesData == 0) {
        return
    }

    minutesData = minutesData - 5

    minutes.textContent = `${String(minutesData).padStart(2, '0')}`
}

musicMenu.addEventListener('click', soundMenu)

function soundMenu() {
    console.log('clicou')


}

// treeButton.addEventListener('click', playForestsound)

// function playForestsound() {
//     treeButton.style.color = 'white'
//     rainButton.style.fill = '#E1E1E6'
//     treeButton.style.fill = '#02799D'
//     forestSound.play()
//     rain.pause()

//     if (onOff === false) {


//         console.log(onOff)


//         onOff = true
//     } else {
//         treeButton.style.fill = '#E1E1E6'
//         forestSound.pause()
//         onOff = false
//     }


//     forestSound.loop = true


// }



// rainButton.addEventListener('click', playRainsound)

// function playRainsound() {

//     if (onOff === false) {
//         rainButton.style.fill = '#02799D'
//         rain.play()
//         fire.pause()
//         forestSound.pause()
//         onOff = true
//     } else {
//         rainButton.style.fill = '#E1E1E6'
//         rain.pause()
//         onOff = false
//     }

//     rain.loop = true
// }


// fireButton.addEventListener('click', playFire)

// function playFire() {
//     rainButton.style.fill = '#E1E1E6'
//     treeButton.style.fill = '#E1E1E6'

//     if (onOff === false) {
//         fireButton.style.fill = '#02799D'
//         fire.play()
//         rain.pause()
//         forestSound.pause()
//         treeButton.style.fill = '#E1E1E6'
//         onOff = true
//     } else {
//         fireButton.style.fill = '#E1E1E6'
//         fire.pause()
//         onOff = false
//     }

//     fire.loop = true
// }
