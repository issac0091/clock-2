OLED.init(128, 64)
let itme = DS1302.create(DigitalPin.P13, DigitalPin.P14, DigitalPin.P15)
itme.DateTime(
2025,
2,
9,
7,
19,
28,
44
)
basic.forever(function () {
    OLED.writeNum(Math.round(itme.getHour()))
    OLED.writeString("：")
    basic.pause(1000)
    OLED.clear()
})
basic.forever(function () {
    OLED.writeNum(Math.round(Math.round(itme.getMinute())))
    OLED.writeString("：")
    basic.pause(1000)
    OLED.clear()
})
basic.forever(function () {
    OLED.writeNum(Math.round(itme.getSecond()))
    basic.pause(1000)
    OLED.clear()
})
