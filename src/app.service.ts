import { Injectable } from '@nestjs/common';
import { MockSensor } from './sensor/mock-sensor';

const config = require('./configuration');

@Injectable()
export class AppService {
    private sensor;

    constructor() {
        try {
            this.sensor = require('node-dht-sensor');
        } catch (ex) {
            this.sensor = new MockSensor();
        }
        this.readSensorData();
    }

    private readSensorData() {
        setInterval(() => {
            this.sensor.read(22, 4, (err, temperature, humidity) => {
                if (!err) {
                    this.saveData(temperature, humidity);
                } else {
                    console.log('Cannot read from sensor', err);
                }
            });
        }, config.read_interval);
    }

    private saveData(temperature, humidity) {
        const temp = temperature.toFixed(1);
        const hum = humidity.toFixed(1);
        console.log('current temp:', temp);
        console.log('current humidity:', hum);
    }

    root(): string {
        return 'Hello World!';
    }
}
