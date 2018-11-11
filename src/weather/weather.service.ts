import { HttpService, Injectable } from '@nestjs/common';
import { Observable, of, timer } from 'rxjs';
import { IWeather } from './weather.model';
import { config } from '../app.service';
import { first, map } from 'rxjs/operators';

@Injectable()
export class WeatherService {
    private cityId = '2929863';
    private current: IWeather;

    constructor(private readonly httpService: HttpService) {
        timer(0, 1000 * 60 * 5).subscribe(() => {
            console.log('calling weather service');
            this.getCurrentWeatherFromServer()
                .pipe(first())
                .subscribe(response => {
                    this.current = response;
                    console.log('weather service returned', response);
                });
        });
    }

    private getCurrentWeatherFromServer = (): Observable<IWeather> => {
        if (!config.weather_api_key) {
            return of(mockWeather);
        }
        return this.httpService
            .get(config.weather_api_base + 'weather?id=' + this.cityId + '&units=metric&lang=de&APPID=' + config.weather_api_key)
            .pipe(map(response => response.data));
    };

    public getCurrentWeather = (): IWeather => {
        return this.current;
    };
}

const mockWeather: IWeather = {
    weather: [
        {
            id: 800,
            main: 'Clear',
            description: 'Klarer Himmel',
            icon: '01d'
        }
    ],
    main: {
        temp: 15,
        pressure: 1012,
        humidity: 77,
        temp_min: 15,
        temp_max: 15
    },
    wind: {
        speed: 4.6,
        deg: 160
    },
    dt: 1541933400,
    sys: {
        sunrise: 1541917819,
        sunset: 1541951287
    },
    clouds: {
        all: 0
    },
    id: 2929863,
    name: 'Eppelheim'
};
