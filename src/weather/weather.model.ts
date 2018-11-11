export interface IWeather {
    weather: IWeatherData[];
    main: IMainData;
    wind: IWind;
    clouds: IClouds;
    dt: number;
    sys: ISysData;
    id: number;
    name: string;
}

export interface IWeatherData {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface IMainData {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
}

export interface IWind {
    speed: number;
    deg: number;
}

export interface IClouds {
    all: number;
}

export interface ISysData {
    sunrise: number;
    sunset: number;
}
