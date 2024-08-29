import { Controller, Get, Post, Body, Param, Patch, BadRequestException, ParseIntPipe, Delete } from '@nestjs/common';
import { MantenimientosService } from './mantenimientos.service';
import { Prisma } from '@prisma/client';

@Controller('mantenimientos')
export class MantenimientosController {
  constructor(private readonly mantenimientosService: MantenimientosService) {}

  @Get()
  findAll() {
    return this.mantenimientosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.mantenimientosService.findOne(id);
  }

  @Post()
  create(@Body() createMantenimientoDto: Prisma.MantenimientoCreateInput) {
    const { unidad, ...mantenimientoData } = createMantenimientoDto;
    if (!unidad) {
      throw new BadRequestException('unidadId es obligatorio.');
    }
    return this.mantenimientosService.create(createMantenimientoDto);
  }

  @Patch('complete/:id')
  complete(@Param('id', ParseIntPipe) id: number, @Body() updateData: Prisma.MantenimientoCreateInput) {
    return this.mantenimientosService.completeMantenimiento(id, updateData);
  }

  @Delete(':id')
  delite(@Param('id', ParseIntPipe) id: number){
    return this.mantenimientosService.delete(id)
  }
}
