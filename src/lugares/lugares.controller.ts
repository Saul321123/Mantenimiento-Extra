import { Controller, Get, Post, Body, Param, Delete, Patch, ParseIntPipe } from '@nestjs/common';
import { LugaresService } from './lugares.service';
import { Lugar } from '@prisma/client';

@Controller('lugares')
export class LugaresController {
  constructor(private readonly lugaresService: LugaresService) {}

  @Get()
  findAll(): Promise<Lugar[]> {
    return this.lugaresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Lugar> {
    return this.lugaresService.findOne(id);
  }

  @Post()
  create(@Body() createLugarDto: Lugar): Promise<Lugar> {
    return this.lugaresService.create(createLugarDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.lugaresService.remove(id);
  }

  @Patch()
  update(@Param('id', ParseIntPipe) id: number){}
}

