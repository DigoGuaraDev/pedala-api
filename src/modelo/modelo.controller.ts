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

    @Get()
    async carregarModelos(): Promise<ModeloModel | null > {
           return null
    }
 
    @Get("/marca")
    async carregarModelosPelMarca(@Query("marca") marca:string):Promise<void>{}
    

}
