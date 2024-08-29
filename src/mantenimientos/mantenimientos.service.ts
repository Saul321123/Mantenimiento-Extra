import { Injectable, NotFoundException, ParseIntPipe } from '@nestjs/common';
import { Mantenimiento, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Int32 } from 'typeorm';

@Injectable()
export class MantenimientosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.MantenimientoCreateInput) {
    // Crear mantenimiento y asociarlo con la unidad
    const id = Number(data.unidad);
    const mantenimiento = await this.prisma.mantenimiento.create({
      data: {
        ...data,
        unidad: { connect: { id } },
      },
    });

    // Actualizar el estado de la unidad
  await this.prisma.unidad.update({
    where: { id },
    data: { estado: 'en mantenimiento' },
  });

    return mantenimiento;
  }

  findAll(): Promise<Mantenimiento[]> {
    return this.prisma.mantenimiento.findMany({
      include: { unidad: true },
    });
  }

  findOne(id: number): Promise<Mantenimiento | null> {
    return this.prisma.mantenimiento.findUnique({
      where: { id },
      include: { unidad: true },
    });
  }

  async completeMantenimiento(id: number, updateData: Prisma.MantenimientoUpdateInput): Promise<Mantenimiento | null> {
    // Actualizar el mantenimiento
    const mantenimiento = await this.prisma.mantenimiento.update({
      where: { id },
      data: updateData,
      include: { unidad: true },
    });

    // Actualizar el estado de la unidad asociada
    await this.prisma.unidad.update({
      where: { id: mantenimiento.unidadId },
      data: { estado: 'disponible' },
    });

    return mantenimiento;
  }

  delete(id: number) {
    const value = this.prisma.mantenimiento.findUnique({
      where: { id },
      include: { unidad: true },
    });

    if(!value){
      throw new NotFoundException(`id ${id} not found`);
    }

    this.prisma.mantenimiento.delete({where: {id}})

    return value;
  }
}

