import { Module } from '@nestjs/common';
import { ManterEstacoesController } from './manter-estacoes.controller';
import { ManterEstacoesService } from './manter-estacoes.service';

@Module({
  controllers: [ManterEstacoesController],
  providers: [ManterEstacoesService]
})
export class ManterEstacoesModule {}
