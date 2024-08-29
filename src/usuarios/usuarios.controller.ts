import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from '@prisma/client';


@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  findAll(): Promise<Usuario[]> {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number){
    return this.usuariosService.findOne(id);
  }

  @Post()
  create(@Body() dato: Usuario){
    return this.usuariosService.create(dato);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dato: Usuario){}

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usuariosService.remove(id);
  }
}

