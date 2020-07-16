input.onButtonPressed(Button.A, function () {
    basic.showNumber(pontok)
})
input.onGesture(Gesture.Shake, function () {
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
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    pontok += 1
})
let kpo = 0
let pontok = 0
basic.showString("Hi")
basic.forever(function () {
	
})
