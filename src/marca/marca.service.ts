import { BadRequestException, Injectable } from '@nestjs/common';
import { MarcaModel } from './marca.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class MarcaService {
    constructor(
        @InjectRepository(MarcaModel)
         private readonly marcaRepository:Repository<MarcaModel> 
    ){}

        async addMarca(data:{nome:string}): Promise<void>{
            const existeMarca = await this.marcaRepository.findOneBy({ nomeMarca:data.nome})
            if (existeMarca) throw new BadRequestException(`Marca já registrada com 
                este nome ${data.nome}`)
                const marca = this.marcaRepository.create({ nomeMarca: data.nome})
                await this.marcaRepository.save(marca)

        }

        async carregarMarcas(): Promise<MarcaModel[]> {
            return await this.marcaRepository.find()
        }

        async carregarMarcaPorId(id: string): Promise<MarcaModel> {
            const marca = await this.marcaRepository.findOne({
                where: {
                    id
                }
            })
            if(!marca) throw new BadRequestException("Marca não encontrada")
            return marca    
        } 

            async aturalizarMarca(id:string, data: {nome:string}) :Promise<void>{
                await this.marcaRepository.update(id,{nomeMarca: data.nome})
            }

            async removeMarca(id:string): Promise<void>{
                await this.marcaRepository.delete(id)
            }


    }


