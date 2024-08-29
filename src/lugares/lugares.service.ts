import { Injectable, NotFoundException } from '@nestjs/common';
import { Lugar } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LugaresService {
  constructor(
    private readonly prisma: PrismaService
    // @InjectRepository(Lugar)
    // private lugaresRepository: Repository<Lugar>,
  ) {}

  findAll(): Promise<Lugar[]> {
    return this.prisma.lugar.findMany()
  }

  findOne(id: number): Promise<Lugar> {
    const value = this.prisma.lugar.findUnique({
      where: { id }
    });

    if(!value){
      throw new NotFoundException(`id ${id} not found`);
    }
    return value;
  }

  create(data: Lugar): Promise<Lugar> {
    return this.prisma.lugar.create({data})
  }

  update(data: Lugar, id): Promise<Lugar> {
    const value = this.prisma.lugar.findUnique({
      where: { id }
    });

    if(!value){
      throw new NotFoundException(`id ${id} not found`);
    }

    return this.prisma.lugar.update({where: {id}, data})
  }

  async remove(id: number) {
    const value = this.prisma.lugar.findUnique({
      where: { id }
    });

    if(!value){
      throw new NotFoundException(`id ${id} not found`);
    }
    this.prisma.lugar.delete({where: {id}})

    return value;
  }
}
