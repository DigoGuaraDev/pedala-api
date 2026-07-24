import { Injectable } from '@nestjs/common';
import { ManutencaoModel } from './manutencao.model';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { ManutencaoRequestDto } from './dto/manutencao.request.dto';
import { BicicletasService } from '../bicicletas/bicicletas.service';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class ManutencaoService {
    constructor(
  @InjectRepository(ManutencaoModel)
        private readonly estacaoRepository: Repository<ManutencaoModel>,
        private readonly bicicletaService: BicicletasService,
        private readonly UsuarioService: UsuarioService
){}

    async addManutencao(request:ManutencaoRequestDto): Promise<void>{
     const bicicleta = await this.bicicletaService.carregarBicicletaPeloID(request.bicicleta_id)
}

    async atualizarManutencao(idManutencao, data:{}):Promise<void>{}

    async listaDeManutencao():Promise<void>{}

    async buscarmanutencaoPelaBicicleta(bicicleta:string):Promise<void>{}
     
    async buscarManutencaoPorId(idManutencao:string):Promise<void>{}

    async solicidacaoPeloUseoDoAdmin(usuarioId:string):Promise<void>{}

}