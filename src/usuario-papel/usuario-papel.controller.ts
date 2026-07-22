import { Controller, Get, Param, Query } from '@nestjs/common';
import { UsuarioPapelService } from './usuario-papel.service';
import { UsuarioPapelModel } from './usuario-papel.model';

@Controller('usuario-papel')
export class UsuarioPapelController {
    constructor(
        private readonly usuariopapelService:UsuarioPapelService
    ){}

    @Get()
    async todosUsuariosPapeis():Promise<UsuarioPapelModel[]>{
        return await this.usuariopapelService.listarUsuariosPapeis()
    }

    @Get("/buscar/:ADMemail")
    async buscarPeloADMemail(@Param("email") email:string):Promise<UsuarioPapelModel | null>{
        return await this.usuariopapelService.buscarEmailDoUsuPapel(email)
    }
  
    @Get("/buscar")
    async buscarUsuarioPapelPeloEmail(@Query("email") email:string){
        return this.usuariopapelService.buscarEmailDoUsuPapel(email)
    }
}
