import { BadGatewayException, BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ModeloModel } from './modelo.model';
import { Repository } from 'typeorm';
import { MarcaService } from 'src/marca/marca.service';
import { ModeloRequestDto } from './dto/modelo.request.dto';

@Injectable()
export class ModeloService {

    constructor(
        @InjectRepository(ModeloModel)
        private readonly moduloRepository: Repository<ModeloModel>,
        private readonly marcaService: MarcaService
    ){}

    async addModelo(request:ModeloRequestDto):Promise<void>{
       const marca= await this.marcaService.carregarMarcaPorId(request.marcaId)
       const existeModelo = await this.moduloRepository.findOneBy({
           nomeMOdelo:request.nome
       })

       if(existeModelo) throw new BadRequestException("Modelo já registrado")
        const modelo = this.moduloRepository.create({
         nomeMOdelo:request.nome,marca
        
    })

    await this.moduloRepository.save(modelo)
    }

    
}
