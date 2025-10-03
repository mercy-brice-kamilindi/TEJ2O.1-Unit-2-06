/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Brice
 * Created on: Sep 2025
 * This program shows led on and off.
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    // turns led on
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P16, 1)
})

input.onButtonPressed(Button.B, function () {
    // turns off led
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P16, 0)
})


