def on_button_pressed_a():
    basic.show_number(pontok)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    global kpo
    kpo = randint(0, 2)
    if kpo == 0:
        basic.show_leds("""
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            """)
    elif kpo == 1:
        basic.show_leds("""
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            """)
    elif kpo == 2:
        basic.show_leds("""
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            """)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_button_pressed_ab():
    control.reset()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global pontok
    pontok += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

kpo = 0
pontok = 0
basic.show_string("Hi")

def on_forever():
    pass
basic.forever(on_forever)
