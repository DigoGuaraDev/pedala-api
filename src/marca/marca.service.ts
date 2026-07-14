import { BadRequestException, Injectable } from '@nestjs/common';
import { MarcaModel } from './dto/marca.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MarcaRequestDto } from './dto/marca_request.dto';

@Injectable()
export class MarcaService {
    constructor(
        @InjectRepository(MarcaModel)
         private readonly marcaRepository:Repository<MarcaModel> 
    ){}

    async criarMarca(request:MarcaRequestDto): Promise<void>{
        const marca = await this.buscarMarcaPeloNome(request.nomeMarca)
        if(marca) throw new BadRequestException(`já existe uma Marca 
            cadastrada com ${request.nomeMarca}`) 
            await this.marcaRepository.save(request)
    }

     async buscarMarcaPeloNome(nomeMarca: string):Promise<MarcaModel | null> {
            return await this.marcaRepository.findOne({
                where: {
                 nomeMarca: nomeMarca
            }
        })
    }

    async buscarTodasMarcas():Promise<MarcaModel[]> {
            return await this.marcaRepository.find()
        }
        
    async buscarEstacaoPorId(id:string): Promise<MarcaModel | null> {
            return await this.marcaRepository.findOneBy({
            id
        
        })
    }

             //async buscarEstacaoUsandoParteDoNome():Promise <MarcaModel[]> {
                    //console.log('***',Query)
                    //const estacao = await this.marcaRepository.find({
                       // where:{
                       // nomeMarca : ILike(`%${Query}%`)
                       // }
                   // })
                    //return estacao
               // }

}
