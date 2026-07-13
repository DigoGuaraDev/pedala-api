import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { ModeloModel } from "./modelo.model"

@Entity("bicicletas")
export class BicicletaModel {

    @PrimaryColumn('uuid')
    id:string

    @ManyToMany(() => ModeloModel)
    @JoinColumn({name:"modelo_id"})
    Modelo: ModeloModel

    @Column()
    status: boolean

    @CreateDateColumn({name:"dt_cadastro",update:false})
    dataCadastro: Date

    @UpdateDateColumn({name:"dt_atualizar",update:true})
    dataDEAtualizacao: Date
}