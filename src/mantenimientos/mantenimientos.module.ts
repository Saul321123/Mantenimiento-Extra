import { Module } from '@nestjs/common';
import { MantenimientosService } from './mantenimientos.service';
import { MantenimientosController } from './mantenimientos.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [MantenimientosService],
  controllers: [MantenimientosController],
  exports: [MantenimientosService], // Exporta el servicio si es necesario en otros módulos
  imports: [PrismaModule]
})
export class MantenimientosModule {}


