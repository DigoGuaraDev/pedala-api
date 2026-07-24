import { Module } from '@nestjs/common';
import { ManutencaoService } from './manutencao.service';
import { ManutencaoController } from './manutencao.controller';
import { InjectRepository } from '@nestjs/typeorm';
import { ManutencaoModel } from './manutencao.model';

@Module({
  providers: [ManutencaoService],
  controllers: [ManutencaoController]
})
export class ManutencaoModule {}
