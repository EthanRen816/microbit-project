let Angle = 0
let Set_an_Angle = 0
let Step = 1
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P0, Angle)
    Angle += Step
    if (Angle <= 0 || Angle >= 180) {
        Step = Step * -1
    }
})
