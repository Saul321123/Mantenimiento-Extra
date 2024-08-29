import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { UnidadesService } from './unidades.service';
import { Unidad } from '@prisma/client';

@Controller('unidades')
export class UnidadesController {
  constructor(private readonly unidadesService: UnidadesService) {}

  @Get()
  findAll(): Promise<Unidad[]> {
    return this.unidadesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Unidad> {
    return this.unidadesService.findOne(id);
  }

  @Post()
  async create(@Body() createUnidadDto: Unidad) {
    try {
      console.log('Datos recibidos:', createUnidadDto);
      return await this.unidadesService.create(createUnidadDto);
    } catch (error) {
      console.error('Error al crear la unidad:', error);
      throw error;  // Lanzar el error para que el cliente reciba el código 500
    }
  }
  

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.unidadesService.remove(id);
  }

  @Patch('update/:id')
updateEstado(@Param('id') id: number, @Body('estado') estado: Unidad) {
  return this.unidadesService.updateEstado(id, estado);
}

}

