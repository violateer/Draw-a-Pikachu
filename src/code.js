export const code = `#pikachu {
    position: absolute;
    width: 4.2em;
    height: 2.35em;
    left: 50%;
    top: 50%;
    -webkit-transform: translateY(-50%) translateX(-50%);
    -moz-transform: translateY(-50%) translateX(-50%);
    -ms-transform: translateY(-50%) translateX(-50%);
    transform: translateY(-50%) translateX(-50%);
}

.eye {
    width: .57em;
    height: .57em;
    border: .03em solid black;
    background: #2e2e2e;
    border-radius: 100%;
    position: absolute;
    margin-left: .6em;
}

.eye::after {
    content: '';
    display: block;
    position: absolute;
    width: .25em;
    height: .25em;
    border-radius: 100%;
    border: .03em solid black;
    background-color: #fff;
    margin-left: .07em;
    margin-top: -.02em;
}

.eye.right {
    right: .6em;
}

.nose {
    position: absolute;
    height: 0;
    width: 0;
    border-top: .09em solid black;
    border-left: .11em solid transparent;
    border-right: .11em solid transparent;
    margin: .3em calc(50% - .11em);
    margin-top: .38em;
    box-shadow: 0 -.01em 0 black;
    z-index: 1;
}

.nose:before {
    content: '';
    display: block;
    position: absolute;
    width: .22em;
    height: .05em;
    background: black;
    margin-top: -.14em;
    margin-left: -.11em;
    border-top-left-radius: .11em .05em;
    border-top-right-radius: .11em .05em;
}

.mouth {
    position: absolute;
    width: 2.28em;
    height: 1.8em;
    margin-top: .65em;
    margin-left: calc(50% - 1.18em);
    overflow: hidden;
}

.mouth::after {
    content: '';
    display: block;
    position: absolute;
    width: .8em;
    height: .25em;
    background: #FFE600;
    border: .03em solid black;
    border-top: none;
    border-left: none;
    right: .25em;
    top: -.05em;
    -webkit-transform: rotate(25deg);
    -moz-transform: rotate(25deg);
    -ms-transform: rotate(25deg);
    transform: rotate(25deg);
    border-bottom-right-radius: .6em .3em;
    box-shadow: 0 -.1em 0 #FFE600, -.05em -.03em 0 #FFE600;
}

.mouth::before {
    content: '';
    display: block;
    position: absolute;
    width: .8em;
    height: .25em;
    background: #FFE600;
    border: .03em solid black;
    border-top: none;
    border-right: none;
    left: .35em;
    top: -.05em;
    -webkit-transform: rotate(-25deg);
    -moz-transform: rotate(-25deg);
    -ms-transform: rotate(-25deg);
    transform: rotate(-25deg);
    border-bottom-left-radius: .6em .3em;
    box-shadow: 0 -.1em 0 #FFE600, -.05em -.03em 0 #FFE600;
    z-index: 1;
}

.mouth>div {
    position: absolute;
    background: #FF485F;
    width: 2.28em;
    height: 8em;
    border: .04em solid black;
    border-bottom-left-radius: 1.18em 8em;
    border-bottom-right-radius: 1.18em 8em;
    margin-top: -6.37em;
    overflow: hidden;
}

.mouth>div::after {
    content: '';
    position: absolute;
    display: block;
    width: 1.3em;
    height: 1em;
    box-shadow: 0 -.7em 0 #9B000A;
    bottom: .35em;
    margin-left: .49em;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
}

.cheek {
    width: .82em;
    height: .82em;
    border: .03em solid black;
    border-radius: 100%;
    position: absolute;
    margin-top: 1.1em;
    background: #F00;
}

.cheek.right {
    right: 0;
}`    

