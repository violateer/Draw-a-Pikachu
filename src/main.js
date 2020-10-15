import code from './code.js'
let currentIndex = 0
let codeClock = null
let toggleFlag = false
const showCode = document.querySelector('#code')
const cssCode = document.querySelector('#cssCode')
const slowBtn = document.querySelector('#slow')
const mediumBtn = document.querySelector('#medium')
const quickBtn = document.querySelector('#quick')
const toggleBtn = document.querySelector('#toggle')
const restartBtn = document.querySelector('#restart')

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

toggleBtn.addEventListener('click', () => {
  toggleBtn.innerText = toggleFlag === false ? '开始' : '暂停'
  toggleFlag = !toggleFlag
  if (toggleFlag) {
    window.clearInterval(codeClock)
  } else {
    showCodeAnimation(100)
  }
})

restartBtn.addEventListener('click', () => {
  currentIndex = 0
  window.clearInterval(codeClock)
  showCodeAnimation(100)
  toggleFlag = !toggleFlag
  toggleBtn.innerText = '暂停'
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