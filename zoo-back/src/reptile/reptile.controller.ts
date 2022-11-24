import { Body, Controller, Post } from '@nestjs/common';
import { Console } from 'console';
import { CreatereptileDto } from './Dto/controller-reptile.dto';

@Controller('reptile')
export class ReptileController {

    @Post()
    async creat (@Body() createreptileDto: CreatereptileDto ){
        return `this action creat a dog ${createreptileDto.name}`
    }
}
