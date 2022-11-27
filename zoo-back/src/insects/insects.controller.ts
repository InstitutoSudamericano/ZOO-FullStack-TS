import { Controller, Post, Body } from '@nestjs/common';
import { CreateInsectsDto } from './Dto/create-controller.dto';

@Controller('insects')
export class InsectsController {
    @Post()
    async create(@Body() createinsectsdto : CreateInsectsDto ) {
        return `This action adds a new insects, ${createinsectsdto.name};
    }
}
