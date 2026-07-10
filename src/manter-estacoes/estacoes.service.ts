import { BadGatewayException, BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { EstacaoModel } from './estacao.model';
import { InjectRepository } from '@nestjs/typeorm';
import { EsatacaoRequestDto } from './dto/estaco_request.dto';

@Injectable()
export class EstacoesService {

    constructor(
    @InjectRepository(EstacaoModel)
        private readonly estacaoRepository:Repository<EstacaoModel>
    ){}
    async criarEstacao(request: EsatacaoRequestDto):Promise<void>{
        const estacao = await this.buscarEstacaoPeloNome(request.nome)
        if(estacao) throw new BadRequestException(`já existe um cadastrada com ${request.nome}`)
            await this.estacaoRepository.findOne({
        })
    }

    async criarEsatacao(request: EsatacaoRequestDto):Promise <void> {
        const estacao = await this.estacaoRepository.findOne({
            where:{
                nomeRequest:request.nome
            }
        })
            if(estacao) throw new BadGatewayException(`Ja existe uma estação cadastrada com ${request.nome}`)
        
                await this.estacaoRepository.save,(request)
    }
}
export class EstacaoService{

    async buscarEstacaoPeloNome(nomeEstacao: string):Promise<EstacaoModel | null>{
        return await this.estacaoRepository.findOne()
    }

    async buscarEstacaoPorID(Id: string):Promise<EstacaoModel> {
        return await this.estacaoRepository.findOne({
            id
        })
    }
}

    
