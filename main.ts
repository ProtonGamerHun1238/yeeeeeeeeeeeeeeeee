input.onGesture(Gesture.LogoDown, function () {
    kpo = randint(0, 2)
    if (kpo == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (kpo == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (kpo == 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    pontok += -1
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(pontok)
})
input.onButtonPressed(Button.B, function () {
    pontok += 1
})
let pontok = 0
let kpo = 0
basic.showString("Hi")
kpo = 0
pontok = 0
basic.forever(function () {
	
})
basic.forever(function () {
    if (pontok == 5) {
        basic.showString("Winner")
    }
})
