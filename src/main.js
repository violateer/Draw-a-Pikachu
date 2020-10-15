import {
  code
} from './code.js'
let currentIndex = 0
let codeClock = null
const showCode = document.querySelector('#code')
const cssCode = document.querySelector('#cssCode')
const slowBtn = document.querySelector('#slow')
const mediumBtn = document.querySelector('#medium')
const quickBtn = document.querySelector('#quick')
const startBtn = document.querySelector('#start')
const pauseBtn = document.querySelector('#pause')

const showCodeAnimation = (interval) => {
  if (codeClock) {
    window.clearInterval(codeClock)
  }
  codeClock = setInterval(() => {
    currentIndex++
    if (currentIndex > code.length) {
      window.clearInterval(codeClock)
      return
    }
    showCode.innerText = code.substring(0, currentIndex)
    cssCode.innerText = code.substring(0, currentIndex)
    showCode.scrollTop = showCode.scrollHeight
  }, interval);
}

showCodeAnimation(100)

startBtn.addEventListener('click', () => {
  showCodeAnimation(100)
})

pauseBtn.addEventListener('click', () => {
  window.clearInterval(codeClock)
})

slowBtn.addEventListener('click', () => {
  showCodeAnimation(300)
})

mediumBtn.addEventListener('click', () => {
  showCodeAnimation(100)
})

quickBtn.addEventListener('click', () => {
  showCodeAnimation(10)
})