import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as express from 'express';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();

    // Parsers
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    // Angular DIST output folder
    app.use(express.static(path.join(__dirname, 'public')));

    await app.listen(3000);
}

bootstrap();
