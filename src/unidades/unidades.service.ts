import { Injectable, NotFoundException } from '@nestjs/common';
import { Unidad } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UnidadesService {
  constructor(
    private prisma: PrismaService,
    // @InjectRepository(Unidad)
    // private unidadesRepository: Repository<Unidad>,
  ) {}

  async findAll(): Promise<Unidad[]> {
    return this.prisma.unidad.findMany()
  }

  async findOne(id: number): Promise<Unidad> {
    const valor = await this.prisma.unidad.findUnique({where: {id}})

    if(!valor){
      throw new NotFoundException(`id ${id} not found`);
    }
    return valor;
  }

  create(data: Unidad): Promise<Unidad> {
    // const unidad = this.unidadesRepository.create(createUnidadDto);
    // return this.unidadesRepository.save(unidad);
    return this.prisma.unidad.create({
      data
    })
  }

  async remove(id: number) {
    // await this.unidadesRepository.delete(id);
    const valor = await this.prisma.unidad.findUnique({where: {id}})

    if(!valor){
      throw new NotFoundException(`id ${id} not found`);
    }

    this.prisma.unidad.delete({where: {id}})
    return valor
  }

  async updateEstado(id: number, data: Unidad){
    // await this.unidadesRepository.update(id, { estado });
    // return this.findOne(id);
    const valor = await this.prisma.unidad.findUnique({where: {id}})

    if(!valor){
      throw new NotFoundException(`id ${id} not found`);
    }

    return this.prisma.unidad.update({where: {id}, data});
    
  }
}
