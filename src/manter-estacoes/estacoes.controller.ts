import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { EstacoesService } from './estacoes.service';
import { EstacaoRequestDto } from './dto/estacao_request.dto';
import { EstacaoModel } from './estacao.model';
import { NOMEM } from 'dns';

@Controller('estacoes')
export class EstacoesController {

    constructor(
        private readonly estacaoService: EstacoesService
    ){}


    @Post() //http://localhost:3000/estacoes
    async addEstacao(@Body() request: EstacaoRequestDto ):Promise<void> {
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
        .buscarEstacaoUsandoParteDoNome(nome)
    }
    @Get("/:id")
    async buscarEstacaoporId(@Param("id") estacaoId: string, @Query("situacao") situacao: string): Promise<EstacaoModel | null>{
        return this.estacaoService.buscarEstacaoPorIdESituacao(estacaoId,
            situacao =='true', );
    }
     //@Get("/:id")
    //async  buscarEstacaoPorId(@Param("id") estacaoId: string):Promise<EstacaoModel | null> {
       // return this.estacaoService.buscarEstacaoPorIdESituacao(estacaoId)
    //}
}