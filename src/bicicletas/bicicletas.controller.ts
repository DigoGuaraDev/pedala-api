import { Body, Controller, Post } from '@nestjs/common';
import { BicicletasService } from './bicicletas.service';
import { request } from 'http';
import { BicicletaRequestDto } from './dto/bicicletas.request.dto';

@Controller('bicicletas')
export class BicicletasController {

    constructor(
        private readonly BicicletasService: BicicletasService
    ){}

    @Post()
    async AddBicicletas(@Body() request: BicicletaRequestDto): Promise <void> {
        await this.BicicletasService.AddBicicletas(request)
    }

    
}
