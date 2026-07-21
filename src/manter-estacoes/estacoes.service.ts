import { BadRequestException, Injectable, NotFoundException, Query } from '@nestjs/common';
import { EstacaoModel } from './estacao.model';
import { ILike, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { EstacaoRequestDto } from './dto/estacao_request.dto';
import { request } from 'http';

@Injectable()
export class EstacoesService {

    constructor(
        @InjectRepository(EstacaoModel)
        private readonly estacaoRepository: Repository<EstacaoModel>
    ){}

    async criarEstacao(request:EstacaoRequestDto ): Promise<void> {
        const estacao = await this.buscarEstacaoPeloNome(request.nome)
        if(estacao) throw new BadRequestException(`Já existe uma estação 
            cadastrada com ${request.nome}`)
        await this.estacaoRepository.save(request)
    }

    async buscarEstacaoPeloNome(nomeEstacao: string):Promise<EstacaoModel | null> {
        return await this.estacaoRepository.findOne({
            where: {
             nome: nomeEstacao
            }
        })
    }

    async buscarTodasEstacoes():Promise<EstacaoModel[]> {
        return await this.estacaoRepository.find()
    }

    //async buscarEstacaoPorId():Promise<EstacaoModel> {
      //  const estacao = await this.estacaoRepository.findOneBy({
        //    nome: .nome,
          //  capacidad: request.capacidad,
            //ativo: request.ativo
        //})
    async buscarEstacaaoPorId(id:string): Promise<EstacaoModel>{
        const estacao = await this.estacaoRepository.findOneBy({
            id
        })
    
        if(!estacao) throw new NotFoundException("Nenhum estação encontrada com este id")
         return estacao
    }

     async buscarEstacaoPorIdESituacao(id:string, situacao: boolean): Promise<EstacaoModel> {
        const estacao = await this.estacaoRepository.findOneBy({
            id,
            ativo: situacao
        })

        if(!estacao) throw new NotFoundException("Nenhuma estação encontrada com este id")
            return estacao
    }
    async buscarEstacaoUsandoParteDoNome(Query:string):Promise <EstacaoModel[]> {
        console.log('***',Query)
        const estacao = await this.estacaoRepository.find({
            where:{
            nome : ILike(`%${Query}%`)
            }
    })
        return estacao
    }
    
}

    
