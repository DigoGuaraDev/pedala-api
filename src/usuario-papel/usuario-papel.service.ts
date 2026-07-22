import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioPapelModel } from './usuario-papel.model';
import { Repository } from 'typeorm';
import { find } from 'rxjs';

@Injectable()
export class UsuarioPapelService {
    constructor(
        @InjectRepository(UsuarioPapelModel)
        private readonly usuarioPapelRepositpry:Repository<UsuarioPapelModel>
    ){}

    //async salvarUsuariosPapeis()

    async listarUsuariosPapeis(): Promise<UsuarioPapelModel[]>{
        return await this.usuarioPapelRepositpry.find()
    }
    //UsuPapel = a UsuarioPapel mis é apreviado
    async buscarEmailDoUsuPapel(email:string): Promise<UsuarioPapelModel | null> {
        return await this.usuarioPapelRepositpry.find({
            where: {
                email: email
            }
        })
    }

    async buscarPeloId(id:string):
    Promise<UsuarioPapelModel>{
        return await this.usuarioPapelRepositpry.findOneByOrFail({
            id
        })
    }
}
