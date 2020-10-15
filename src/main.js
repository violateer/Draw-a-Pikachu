import {code} from './code.js'
let count = 1
const show = document.querySelector('.show')
const cssCode = document.querySelector('#cssCode')

let codeClock = setInterval(() => {
    count++
    if(count > code.length) {
    clearTimeout(codeClock)
        return
    }
    show.innerText = code.substring(0, count)
    cssCode.innerText = code.substring(0, count)
    show.scrollTop = show.scrollHeight
}, 0);
