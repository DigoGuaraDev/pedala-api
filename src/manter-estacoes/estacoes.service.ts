import { BadRequestException, Injectable, Query } from '@nestjs/common';
import { EstacaoModel } from './estacao.model';
import { ILike, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { EsatacaoRequestDto } from './dto/estacao_request.dto';

@Injectable()
export class EstacoesService {

    constructor(
        @InjectRepository(EstacaoModel)
        private readonly estacaoRepository: Repository<EstacaoModel>
    ){}

    async criarEstacao(request:EsatacaoRequestDto ): Promise<void> {
        const estacao = await this.buscarEstacaoPeloNome(request.nome)
        if(estacao) throw new BadRequestException(`Já existe uma estação 
            cadastrada com ${request.nome}`)
        await this.estacaoRepository.save(request)
    }

    async buscarEstacaoPeloNome(nomeEstacao: string):Promise<EstacaoModel | null> {
        return await this.estacaoRepository.findOne({
            where: {
                nome : nomeEstacao
            }
        })
    }

    async buscarTodasEstacoes():Promise<EstacaoModel[]> {
        return await this.estacaoRepository.find()
    }

    async buscarEstacaoPorId(id:string): Promise<EstacaoModel | null> {
        return await this.estacaoRepository.findOneBy({
            id
        })
    }

    async buscarEstacaoUsandoParteDoNome():Promise <EstacaoModel[]> {
        console.log('***',Query)
        const estacao = await this.estacaoRepository.find({
            where:{
            nome : ILike(`%${Query}%`)
            }
        })
        return estacao
    }
    
}

    
