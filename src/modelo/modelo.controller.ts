import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ModeloService } from './modelo.service';
import { request } from 'http';
import { ModeloRequestDto } from './dto/modelo.request.dto';
import { ModeloModel } from './modelo.model';

@Controller('modelo')
export class ModeloController {
    constructor(
        private readonly modeloService: ModeloService
    ){}

    @Post()
    async addModelo(@Body() request: ModeloRequestDto): Promise <void>{
        await this.modeloService.addModelo(request)
    }

    //@Get()
    //async carregarModelos(): Promise<ModeloModel[]> {
         //  return await this.modeloService.carregarModelo()
   // }
 
    @Get("/marca")
    async carregarModelosPelMarca(@Query("marca") marca:string):Promise<void>{}

    //https://localhost:3000/modelos
    @Get()
    async carregarModelos(@Query("marca") marca:string):Promise<ModeloRequestDto[]>{
        let modelos

        if(marca) {
            modelos = await this.modeloService.carregarModeloPelaMarca(marca)
        }else {
            modelos = await this.modeloService.carregarModelo()
        }
        return modelos
    }

}
