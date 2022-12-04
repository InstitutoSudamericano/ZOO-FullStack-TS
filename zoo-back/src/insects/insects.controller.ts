import { Controller, Post, Body, Get, Put, Param, Delete} from  '@nestjs/common';
import { CreateInsectsDto } from './Dto/create-controller.dto';

@Controller('insects')
export class InsectsController {
    @Get()
    creat(): string {
        return `This action retuns all insects`;
    }

    @Post()
    async create(@Body() createinsectsdto : CreateInsectsDto ) {
        return `This action adds a new insects, ${createinsectsdto.name}`;
    }
   
    @Put(':id')
    update (@Param('id') id:string, @Body() createinsectsdto: CreateInsectsDto) {
      return `This action updates a #${id} dog`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action remove a #${id} dog`;
    }
}
