
const treeButton = document.querySelector('.tree-button')
const rainButton = document.querySelector('.rain-button')
const fireButton = document.querySelector('.fire-button')
const cafeteriaButton = document.querySelector('.cafeteria-button')

const forestSound = new Audio('./assets/sounds/Floresta.wav')
const rainSound = new Audio('./assets/sounds/Chuva.wav')
const fireSound = new Audio('./assets/sounds/Lareira.wav')
const cafeteriaSound = new Audio('./assets/sounds/Cafeteria.wav')
const timerFinishedSound = new Audio('./assets/sounds/timer-sound.mp3')



const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')


let timeout;
const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')

let currentSound;
let running = false

start.addEventListener('click', startTimer)




function startTimer() {

    start.removeEventListener('click', startTimer)

    console.log(running)

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
        currentSound.play()
    }

    if (secondsValue <= 0 && minutesValue < 0) {
        timerFinishedSound.play()
        currentSound.stop
        stopTimer()
    }


}

stop.addEventListener('click', stopTimer)

function stopTimer() {
    start.addEventListener('click', startTimer)
    minutes.textContent = `05`
    seconds.textContent = `00`
    clearTimeout(timeout)
    currentSound.pause()

    currentSound = ''

    cafeteriaButton.style.fill = '#E1E1E6'
    treeButton.style.fill = '#E1E1E6'
    rainButton.style.fill = '#E1E1E6'
    fireButton.style.fill = '#E1E1E6'

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
    if (minutesData == 0 || minutesData < 5) {
        return
    }

    minutesData = minutesData - 5

    minutes.textContent = `${String(minutesData).padStart(2, '0')}`
}


treeButton.addEventListener('click', playForestsound)

function playForestsound() {
    treeButton.style.fill = '#02799D'
    fireButton.style.fill = '#E1E1E6'
    rainButton.style.fill = '#E1E1E6'
    cafeteriaButton.style.fill = '#E1E1E6'
    currentSound = forestSound
}



rainButton.addEventListener('click', playRainsound)

function playRainsound() {
    rainButton.style.fill = '#02799D'
    treeButton.style.fill = '#E1E1E6'
    fireButton.style.fill = '#E1E1E6'
    cafeteriaButton.style.fill = '#E1E1E6'
    currentSound = rainSound
}


fireButton.addEventListener('click', playFire)

function playFire() {
    fireButton.style.fill = '#02799D'
    treeButton.style.fill = '#E1E1E6'
    rainButton.style.fill = '#E1E1E6'
    cafeteriaButton.style.fill = '#E1E1E6'
    currentSound = fireSound
}

cafeteriaButton.addEventListener('click', playCafeteria)

function playCafeteria() {
    currentSound = cafeteriaSound
    cafeteriaButton.style.fill = '#02799D'
    treeButton.style.fill = '#E1E1E6'
    rainButton.style.fill = '#E1E1E6'
    fireButton.style.fill = '#E1E1E6'
}