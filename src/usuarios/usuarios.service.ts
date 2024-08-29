import { Injectable, NotFoundException } from '@nestjs/common';
import { Unidad, Usuario } from '@prisma/client';
// import { Repository } from 'typeorm';
// import { InjectRepository } from '@nestjs/typeorm';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService
    // @InjectRepository(Usuario)
    // private usuariosRepository: Repository<Usuario>,
  ) {}

  async findAll(): Promise<Usuario[]> {
    //return this.usuariosRepository.find();
    return this.prisma.usuario.findMany()
  }

  async findOne(id: number) {
    // Usa un objeto de opciones para la búsqueda
    // return this.usuariosRepository.findOne({
    //   where: { id },
    // });
    const valor = await this.prisma.unidad.findUnique({where: {id}})

    if(!valor){
      throw new NotFoundException(`id ${id} not found`);
    }
    return valor;
  }

  async create(data: Usuario): Promise<Usuario> {
    // const usuario = this.usuariosRepository.create(createUsuarioDto);
    // return this.usuariosRepository.save(usuario);
    return this.prisma.usuario.create({
      data
    })
  }

  async remove(id: number): Promise<Unidad> {
    // await this.usuariosRepository.delete(id);
    const valor = await this.prisma.unidad.findUnique({where: {id}})

    if(!valor){
      throw new NotFoundException(`id ${id} not found`);
    }
    this.prisma.unidad.delete({where:{id}})
    return valor;
  }

  async update(id: number, data:Unidad){
    // await this.usuariosRepository.delete(id);
    const valor = await this.prisma.unidad.findUnique({where: {id}})

    if(!valor){
      throw new NotFoundException(`id ${id} not found`);
    }

    return this.prisma.unidad.update({
      where: {id},
      data
    })
  }
}


