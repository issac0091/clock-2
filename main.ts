OLED.init(128, 64)
let itme = DS1302.create(DigitalPin.P13, DigitalPin.P14, DigitalPin.P15)
itme.DateTime(
2025,
2,
8,
6,
21,
11,
22
)
basic.forever(function () {
    OLED.newLine()
    OLED.writeNum(Math.round(itme.getMinute()))
    basic.pause(1000)
    OLED.clear()
})
basic.forever(function () {
    OLED.newLine()
    OLED.newLine()
    OLED.writeNum(Math.round(itme.getSecond()))
    basic.pause(1000)
    OLED.clear()
})
basic.forever(function () {
    OLED.writeNum(Math.round(itme.getHour()))
    basic.pause(1000)
    OLED.clear()
})
