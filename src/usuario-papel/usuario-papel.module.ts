import { Module } from '@nestjs/common';
import { UsuarioPapelService } from './usuario-papel.service';
import { UsuarioPapelController } from './usuario-papel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioPapelModel } from './usuario-papel.model';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioPapelModel])],
  providers: [UsuarioPapelService],
  controllers: [UsuarioPapelController]
})
export class UsuarioPapelModule {}
