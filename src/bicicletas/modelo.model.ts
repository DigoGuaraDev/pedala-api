import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { MarcaModel } from "./marca.model"

@Entity("modelo")
export class ModeloModel {

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({name:"modelo"})
    nomeMOdelo:string

    @ManyToOne(() => MarcaModel)
    @JoinColumn({ name:"marca_id"})
    marca: MarcaModel
}  