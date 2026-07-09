import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("estacoes")
export class EstacaModel {
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