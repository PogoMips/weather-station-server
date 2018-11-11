import { Injectable } from '@nestjs/common';
import { MockSensor } from './sensor/mock-sensor';

export const config = require('./configuration');

export interface IDashboardData {
    temperature: number;
    temperatureLow: number;
    temperatureHigh: number;
    humidity: number;
    humidityLow: number;
    humidityHigh: number;
}

@Injectable()
export class AppService {
    private sensor;

    private temperature;
    private humidity;

    constructor() {
        this.initSensor();
        this.readSensorData();
    }

    private initSensor() {
        try {
            this.sensor = require('node-dht-sensor');
        } catch (ex) {
            this.sensor = new MockSensor();
        }
    }

    private readSensorData() {
        setInterval(() => {
            this.sensor.read(22, 4, this.saveData);
        }, config.read_interval);
    }

    saveData = (err, temperature, humidity) => {
        if (!err) {
            this.temperature = temperature;
            this.humidity = humidity;
        } else {
            console.log('Cannot read from sensor', err);
        }
    };

    getDashboardData = (): IDashboardData => {
        return {
            temperature: this.temperature,
            humidity: this.humidity,
            temperatureLow: 0,
            temperatureHigh: 0,
            humidityLow: 0,
            humidityHigh: 0
        };
    };
}
