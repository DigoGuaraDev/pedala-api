import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("marca")
export class MarcaModel {
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({name:"nome"})
    nomeMarca: string

}