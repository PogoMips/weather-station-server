import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api/current')
export class DataController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getDashboardData(): any {
        return this.appService.getDashboardData();
    }
}
