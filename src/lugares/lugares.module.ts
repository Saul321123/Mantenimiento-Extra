import { Module } from '@nestjs/common';
import { LugaresService } from './lugares.service';
import { LugaresController } from './lugares.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [LugaresService],
  controllers: [LugaresController],
  imports: [PrismaModule],
})
export class LugaresModule {}
