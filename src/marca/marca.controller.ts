import { Body, Controller, Get, Post } from '@nestjs/common';
import { MarcaService } from './marca.service';
import { MarcaModel } from './marca.model';

@Controller('marca')
export class MarcaController {
     constructor(
            private readonly maarcaService: MarcaService
        ){}

        @Post()
        async nonaMarca(@Body() nome:string):Promise<void>{
            await this.maarcaService.addMarca(nome)
   }

        @Get()
        async todassMarcas(): Promise<MarcaModel[]> {
                return this.maarcaService.carregarMarcas()
        }
        }
