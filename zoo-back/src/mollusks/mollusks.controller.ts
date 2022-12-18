import { Controller, Get, Post, Put, Body, Delete, Param } from '@nestjs/common';
import { CreateDtoMollusks } from './Dto/create-controller.dto';

@Controller('mollusks')
export class MollusksController { 
@Get()
creat(): string {
    return `This action returns all insects`;
}
@Post()
async create(@Body() createmollusksdto : CreateDtoMollusks) {
return `This action adds a new mollusks, ${createmollusksdto.name}`;
}
@Put(':id')
    update (@Param('id') id:string, @Body() createmollusksdto: CreateDtoMollusks) {
      return `This action updates a #${id} mollusks`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action remove a #${id} mollusks`;
    }
}
