import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ModeloModel } from './modelo.model';
import { ILike, Repository } from 'typeorm';
import { MarcaService } from 'src/marca/marca.service';
import { ModeloRequestDto } from './dto/modelo.request.dto';
import { ModeloResponseDto } from './dto/modelo.response.dto';

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

    async carregarModelo():Promise<ModeloResponseDto[]> {
        const modelos = await this.moduloRepository.find({
            relations:{
                marca:true
            }
        })

        return modelos.map(mo => ({
            id: mo.id,
            modelo: mo.nomeMOdelo,
            marca: mo.marca.nomeMarca
        }))
    }

    async carregarModeloPelaMarca(marca:string):Promise<ModeloResponseDto[]> {
        const modelos = await this.moduloRepository.find({
            where:{
                marca:{
                    nomeMarca: ILike(`%${marca}%`)
                }
            },
            relations:{
                marca:true
            }
        })
         return modelos.map(modelos => {
            return {
                id: modelos.id,
            modelo: modelos.nomeMOdelo,
            marca: modelos.marca.nomeMarca
            }
         })
    }

    async carregarModeloPeloId(modeloId:string):Promise<ModeloModel>{
        const Modelo = await this.moduloRepository.findOneBy({
            id: modeloId
        })

        if (!Modelo) throw new NotFoundException("Modelo não encontrado!")

            return Modelo
    }
}