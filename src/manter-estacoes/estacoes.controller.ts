import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { EstacoesService } from './estacoes.service';
import { EsatacaoRequestDto } from './dto/estacao_request.dto';
import { EstacaoModel } from './estacao.model';
import { NOMEM } from 'dns';

@Controller('estacoes')
export class EstacoesController {

    constructor(
        private readonly estacaoService: EstacoesService
    ){}


    @Post() //http://localhost:3000/estacoes
    async addEstacao(@Body() request: EsatacaoRequestDto ):Promise<void> {
        await this.estacaoService.criarEstacao(request)
    }

    @Get()
    async carregarEstacoes():Promise<EstacaoModel[]>  {
        return await this.estacaoService.buscarTodasEstacoes()
    }

     @Get("/buscar")
    async buscandoEstacaoPeloNome(@Query("nome") nome:string)
            :Promise<EstacaoModel[]> {
        return await this.estacaoService
        .buscarEstacaoUsandoParteDoNome()
    }
     @Get("/:id")
    async buscarEstacaoPorId(@Param("id") estacaoId: string):Promise<EstacaoModel | null> {
        return this.estacaoService.buscarEstacaoPorId(estacaoId)
    }
}