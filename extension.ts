namespace bluetooth {
    /**
     * Starts a Bluetooth temperature service listening
     * to a MAX6675 on the given pin. Should only be called once.
     */
    //% block
    export function startMax6675Service(pin: DigitalPin) {
        bluetooth.startTemperatureSensor(1000, () => {
            bluetooth.setTemperatureSensorValue(input.max6675Temperature(pin));
        })
    }
}