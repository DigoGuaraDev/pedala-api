import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BicicletaModel } from './bicicleta.model';
import { Repository } from 'typeorm';
import { BicicletaRequestDto } from './dto/bicicletas.request.dto';
import { ModeloService } from 'src/modulo/modelo/modelo.service';
import { EstacaoModel } from 'src/modulo/manter-estacoes/estacao.model';
import { EstacoesService } from 'src/modulo/manter-estacoes/estacoes.service';


@Injectable()
export class BicicletasService {
    constructor(
        @InjectRepository(BicicletaModel)
        private readonly bicicletaRepository:Repository<BicicletaModel>,
        private readonly modeloService: ModeloService,
        private readonly estacoesService: EstacoesService 
    ){}

  async addBicicleta(data: BicicletaRequestDto): Promise<void> {
        const lotacao = await this.estacoesService
                    .buscarEstacaoPorIdESituacao(data.estacaoId, true)
        const modelo = await this.modeloService.carregarModeloPeloId(data.modelo_id)

 const contarTotalDeBicicletaNaEstacao = await this.bicicletaRepository.count({
            where: {
                lotacao: {
                    id: lotacao.id
                }
            }
        })

     if(lotacao.capacidad > contarTotalDeBicicletaNaEstacao && lotacao.ativo === true ) {
            throw new 
                BadRequestException(`Estação com capacidade máxima de ${lotacao.capacidad}`)
        }

    const bicicleta = this.bicicletaRepository.create({
        status: data.status,
        modelo: modelo,
        lotacao: lotacao,
        dataCadastro: new Date()
    })
        await this.bicicletaRepository.save(bicicleta)
    }

async carregarBicicletas(): Promise<BicicletaModel[]> {
   return await this.bicicletaRepository.find({
            relations: {
                modelo: {
                    marca: true
                },
                lotacao: true
            }
        })
    }
}

    