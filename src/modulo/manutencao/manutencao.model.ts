import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UUID } from "typeorm/driver/mongodb/bson.typings.js";
import { BicicletaModel } from "../bicicletas/bicicleta.model";
import { UsuarioModel } from "../usuario/usuario.model";
import { StatusManutencao } from "./Status.manutencao.enum";

export class ManutencaoModel{
    
    @PrimaryGeneratedColumn('uuid')
    id:string

    @ManyToOne(()=> BicicletaModel)
    @JoinColumn({name:"bicicleta_id"})
    bicicleta: BicicletaModel

    @ManyToOne(()=> UsuarioModel)
    @JoinColumn({name:"tecnico_id"})
    tecnico: UsuarioModel //TECNICO

    @ManyToOne(()=> UsuarioModel)
    @JoinColumn({name:"responsavel_id"})
    resoponsavel: UsuarioModel //ADNIM

    @Column({type:'text', nullable:false})
    descricao:string

    @Column({
        name:"status",
        type: 'enum',
        default: 'StatusManutencao'.AGUADANDO
    })
    status:StatusManutencao

    @Column({type:'text', nullable:true})
    obsevacoes:string //PENDENDE, EM ANDAMENTO, FINALIZDO

    @CreateDateColumn({name:"dt_aberta", nullable:false,update:false})
    aberta_em:Date

    @UpdateDateColumn({name:"dt_atualizacao", nullable:true,update:true})
    atualizando_em: Date

    @Column({name:"dt_finalizada", nullable:true})
    finalizada_em:Date
}