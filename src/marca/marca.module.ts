import { Module } from '@nestjs/common';
import { MarcaService } from './marca.service';
import { MarcaController } from './marca.controller';
import { MarcaModel } from './marca.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MarcaModel])],
  providers: [MarcaService],
  controllers: [MarcaController],
  exports:[MarcaService]
})
export class MarcaModule {}

