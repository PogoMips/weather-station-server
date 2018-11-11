import { HttpModule, Module } from '@nestjs/common';
import { DataController } from './data.controller';
import { AppService } from './app.service';
import { WeatherController } from './weather/weather.controller';
import { WeatherService } from './weather/weather.service';

@Module({
    imports: [HttpModule],
    controllers: [DataController, WeatherController],
    providers: [AppService, WeatherService]
})
export class AppModule {}
