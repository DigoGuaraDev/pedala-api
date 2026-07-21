import { BadRequestException, Injectable, NotFoundException, Query } from '@nestjs/common';
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
        await this.estacaoRepository.save
    }

    async buscarEstacaoPeloNome(nomeEstacao: string):Promise<EstacaoModel | null> {
        return await this.estacaoRepository.findOne({
            where: {
             nomeEstacao: nomeEstacao
            }
        })
    }

    async buscarTodasEstacoes():Promise<EstacaoModel[]> {
        return await this.estacaoRepository.find()
    }

     async buscarEstacaoPorIdESituacao(id:string, situacao: boolean): Promise<EstacaoModel> {
        const estacao = await this.estacaoRepository.findOneBy({
            id,
            ativa: situacao
        })

        if(!estacao) throw new NotFoundException("Nenhuma estação encontrada com este id")
            return estacao
    }
    async buscarEstacaoUsandoParteDoNome(Query:string):Promise <EstacaoModel[]> {
        console.log('***',Query)
        const estacao = await this.estacaoRepository.find({
            where:{
            nomeEstacao : ILike(`%${Query}%`)
            }
    })
        return estacao
    }
    
}

    
