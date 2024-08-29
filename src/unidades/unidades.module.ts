import { Module } from '@nestjs/common';
import { UnidadesService } from './unidades.service';
import { UnidadesController } from './unidades.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [UnidadesService],
  controllers: [UnidadesController],
  imports: [PrismaModule],
})
export class UnidadesModule {}

