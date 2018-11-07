import { Controller, Get, Res } from '@nestjs/common';
import * as path from 'path';

@Controller()
export class AppController {
    constructor() {}

    @Get()
    getStaticContent(@Res() res): any {
        return res.sendFile(path.join(__dirname, 'public/index.html'));
    }
}
