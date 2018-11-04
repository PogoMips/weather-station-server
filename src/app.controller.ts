import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api/current')
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getDashboardData(): any {
        return this.appService.getDashboardData();
    }
}
