import { Module } from '@nestjs/common';
import { DataController } from './data.controller';
import { AppService } from './app.service';

@Module({
    imports: [],
    controllers: [DataController],
    providers: [AppService]
})
export class AppModule {}
