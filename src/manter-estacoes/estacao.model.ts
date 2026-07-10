import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"
import { EstacoesService } from "./estacoes.service"
import { TypeOrmModule } from "@nestjs/typeorm"
import {EstacaoMode} from './estacao.model';

@Entity("estacoes")
export class EstacaoMode {
    @PrimaryGeneratedColumn('uuid')
    id:string
    @Column({name: 'nm_estacao'})
    nomeEstacao:string
    @Column()
    capacidade:number
    @Column()
    ativa:boolean
    @CreateDateColumn({name: 'dt_cricao'})
    dataCriacao: Date
}