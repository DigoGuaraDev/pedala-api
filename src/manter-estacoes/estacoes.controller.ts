import { Body, Controller, Param, Post } from '@nestjs/common';
import { request } from 'http';
import { EsatacaoRequestDto } from './dto/estaco_request.dto';
import { EstacaoModel } from './estacao.model';

@Controller('manter-estacoes')
export class EstacoesController {
    constructor(
        private readonly estacaoSevice: EstacaoService
    ){}

    @Post() //http://localhost:3000/estacoes
    async addEstacao(@Body() request: EsatacaoRequestDto): Promise<void>{
        await this.estacaoSevice.criarEsatacao(request)
    }
    @Get()
    async carregarEstacoes():Promise <EstacaoModel[]> {
        request await this.estacaoSevice.buscarTodasEstacoes()
    }
    @Get("/:")
    async buscarEstacaoPorID(@Param("id") estacaoId: string):Promise<EstacaoModel | null> {
        return null
    }
}
