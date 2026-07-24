import { Controller, Post } from '@nestjs/common';
import { ManutencaoService } from './manutencao.service';
import { ManutencaoRequestDto } from './dto/manutencao.request.dto';

@Controller('manutencao')
export class ManutencaoController {
    constructor(
        private readonly manutencaoService: ManutencaoService
    ){}

    @Post()
    async registraManutencao(request:ManutencaoRequestDto):Promise<void>{}

 
    //registror uma manutenção
    //-deverá ser realizado pelo 

}
