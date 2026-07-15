import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { MarcaService } from './marca.service';
import { MarcaModel } from './marca.model';

@Controller('marca')
export class MarcaController {
     constructor(
            private readonly maarcaService: MarcaService
        ){}

        @Post()
        async nonaMarca(@Body() data: {nome:string}):Promise<void>{
            await this.maarcaService.addMarca(data)
   }

        @Get()
        async todassMarcas(): Promise<MarcaModel[]> {
                return this.maarcaService.carregarMarcas()
        }

        @Put("/atualizar/:id")
        @HttpCode(204)
        async atualizarDadosDaMarca(@Param("id")marcaId:string,
        @Body() data:{nome:string}): Promise<void>{
            await this.atualizarDadosDaMarca(marcaId, data)
        }

@Delete("/remover/:id")
async deletarMarca(@Param("id") id:string):Promise<void>{
    await this.maarcaService.removeMarca(id)
}

}
