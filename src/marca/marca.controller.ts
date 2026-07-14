import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MarcaService } from './marca.service';
import { MarcaRequestDto } from './dto/marca_request.dto';
import { MarcaModel } from './dto/marca.model';

@Controller('marca')
export class MarcaController {
     constructor(
            private readonly estacaoService: MarcaService
        ){}

        @Post()
            async addEstacao(@Body() request: MarcaRequestDto ):Promise<void> {
                await this.estacaoService.criarMarca(request)
            }

        @Get()
            async carregarEstacoes():Promise<MarcaModel[]>  {
                return await this.estacaoService.buscarTodasMarcas()
            }
        @Get("/:id")
            async buscarEstacaoPorId(@Param("id") estacaoId: string):Promise<MarcaModel | null> {
                return this.estacaoService.buscarEstacaoPorId(estacaoId)
            }
          
}
