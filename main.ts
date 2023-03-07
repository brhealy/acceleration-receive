radio.onReceivedNumber(function (receivedNumber) {
    led.plotBarGraph(
    receivedNumber,
    0
    )
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    radio.setGroup(4)
})
