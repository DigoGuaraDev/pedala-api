import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("estacoes")
export class EstacaoModel {
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({name: 'nm_estacao'})
    nome:string

    @Column()
    capacidad:number

    @Column()
    ativo:boolean

    @CreateDateColumn({name: 'dt_cricao'})
    dataCriacao: Date
}