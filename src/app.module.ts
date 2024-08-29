 import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller'; 
import { AppService } from './app.service'; 
import { UsuariosModule } from './usuarios/usuarios.module';
import { UnidadesModule } from './unidades/unidades.module';
import { LugaresModule } from './lugares/lugares.module';
import { MantenimientosModule } from './mantenimientos/mantenimientos.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'postgres',
    //   port: 5432,
    //   username: 'root',
    //   password: 'root',
    //   database: 'transport_management',
    //   entities: [], 
    //   synchronize: true,
    //    autoLoadEntities: true,
    // }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: '',
    //   database: 'transport_management',
    //   entities: [Usuario, Unidad, Lugar, Mantenimiento],
    //   synchronize: true,
    // }),
    
    UsuariosModule,
    UnidadesModule,
    LugaresModule,
    MantenimientosModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService], 
})
export class AppModule {}




