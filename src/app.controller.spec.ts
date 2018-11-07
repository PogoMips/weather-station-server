import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { DataController } from './data.controller';
import { AppService } from './app.service';

describe('DataController', () => {
    let app: TestingModule;

    beforeAll(async () => {
        app = await Test.createTestingModule({
            controllers: [DataController],
            providers: [AppService]
        }).compile();
    });

    describe('root', () => {
        it('should return "Hello World!"', () => {
            const appController = app.get<DataController>(DataController);
            expect(appController.root()).toBe('Hello World!');
        });
    });
});
