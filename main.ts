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
    OLED.writeString("h：")
    OLED.writeNum(Math.round(itme.getHour()))
    OLED.writeString("  ")
    basic.pause(1000)
    OLED.clear()
})
basic.forever(function () {
    OLED.writeString("min：")
    OLED.writeNum(Math.round(Math.round(itme.getMinute())))
    OLED.writeString("  ")
    basic.pause(1000)
    OLED.clear()
})
basic.forever(function () {
    OLED.writeString("sec：")
    OLED.writeNum(Math.round(itme.getSecond()))
    OLED.writeString("  ")
    basic.pause(1000)
    OLED.clear()
})
