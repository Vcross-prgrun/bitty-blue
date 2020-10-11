bluetooth.onBluetoothConnected(function () {
    basic.showString("C")
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("D")
})
basic.showString("BLUE-NP")
bluetooth.startAccelerometerService()
bluetooth.startButtonService()
bluetooth.startLEDService()
