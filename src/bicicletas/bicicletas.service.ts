import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BicicletaModel } from './bicicleta.model';
import { Repository } from 'typeorm';
import { BicicletaRequestDto } from './dto/bicicletas.request.dto';
import { ModeloService } from 'src/modelo/modelo.service';
import { EstacaoModel } from 'src/manter-estacoes/estacao.model';


@Injectable()
export class BicicletasService {

    constructor(
        @InjectRepository(BicicletaModel)
        private readonly bicicletaRepository:Repository<BicicletaModel>,
        private readonly modeloService: ModeloService,
        private readonly estacoesService: EstacaoModel
    
    ){}
    //Todo: Editar cadastro de Biciclra
    //TODO: Melhorar a apresentação do Jeon de bicicleta 

     async addBicicleta(data: BicicletaRequestDto): Promise<void> {
        const lotacao = await this.estacoesService.BuscarEstacaoPorIdESituacao(data.estacaoId, true)
        const modelo = await this.modeloService.carregarModeloPeloId(data.modelo_id)

        const contarTotalIDBicicletaNaEstacao = await this.bicicletaRepository.count({
            where: {
                lotacao:{id: lotacao.id}
     }
        })

        if(lotacao.capacidade > contarTotalIDBicicletaNaEstacao && lotacao.ativa==true){
            throw new
            BadRequestException(`Estação com capacidade máxíma atigida}`)
        }

        const bicicleta = this.bicicletaRepository.create({
            status: data.status,
            modelo: modelo,
            lotacao: lotacao,
            dataCadastro: new Date()
})
        await this.bicicletaRepository.save(bicicleta)
    }

    async 

async carregarBicicletas():Promise<BicicletaModel[]>{
        return await this.bicicletaRepository.find({
            relations: {
                modelo: {marca: true}, lotacao:true
            },
        })
        return bicicletas.map(b => ({
            id:bicicletas.id,
            estaoAtual:bicicletas.estacao.nome,
            modelo: bicicletas.modelo.nomeModel,
            marca: bicicletaas.modelo.maraca.nomeMarca,
            status: bicicletas.status
        }))
return bicicletas

}



}