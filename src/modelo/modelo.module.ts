import { Module } from '@nestjs/common';
import { ModeloService } from './modelo.service';
import { ModeloController } from './modelo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModeloModel } from './modelo.model';

@Module({
  imports: [TypeOrmModule.forFeature([ModeloModel])],
  providers: [ModeloService],
  controllers: [ModeloController]
})
export class ModeloModule {}
