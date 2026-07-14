import { Module } from '@nestjs/common';
import { MarcaService } from './marca.service';
import { MarcaController } from './marca.controller';
import { MarcaModel } from './dto/marca.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MarcaModel])],
  providers: [MarcaService],
  controllers: [MarcaController]
})
export class MarcaModule {}

