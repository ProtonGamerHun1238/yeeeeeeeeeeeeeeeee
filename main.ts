let kpo = 0
let pontok = 0
input.onButtonPressed(Button.A, function () {
    kpo = randint(1, 3)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(pontok)
})
input.onButtonPressed(Button.B, function () {
    pontok += 1
})
basic.forever(function () {
	
})
