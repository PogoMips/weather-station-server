import { Controller, Get } from '@nestjs/common';
import { IWeather } from './weather.model';
import { WeatherService } from './weather.service';

@Controller('api/weather')
export class WeatherController {
    constructor(private weatherService: WeatherService) {}

    @Get('current')
    getCurrentWeather(): IWeather {
        return this.weatherService.getCurrentWeather();
    }
}
