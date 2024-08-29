import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [UsuariosService],
  controllers: [UsuariosController],
  imports: [PrismaModule],
})
export class UsuariosModule {}
