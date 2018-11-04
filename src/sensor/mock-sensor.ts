export class MockSensor {
    public read(sensorType: number, gpioPort: number, callback: (err, temperature, humidity) => void) {
        const mockTemp = Math.random() * (17.5 - 21.3) + 21.3;
        const mockHumidity = Math.random() * (55 - 87) + 87;
        callback(null, mockTemp, mockHumidity);
    }
}
