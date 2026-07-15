import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BicicletaModel } from './bicicleta.model';
import { Repository } from 'typeorm';
import { BicicletaRequestDto } from './dto/bicicletas.request.dto';

@Injectable()
export class BicicletasService {
    constructor(
        @InjectRepository(BicicletaModel)
         private readonly moduloRepository: Repository<BicicletaModel>,
         private readonly bicicletaService: BicicletasService
    ){}

    async AddBicicletas(request:BicicletaRequestDto): Promise<void> {
        const bicicleta = await this.bicicletaService.cerregarBicicletaPorId(request.)
    }

}
