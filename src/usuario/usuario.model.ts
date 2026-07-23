import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { UsuarioPapel } from "./usuario.papel.enum"

@Entity("usuarios")
export class UsuarioModel {
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    nome: string

    @Column()
    email: string

    @Column()
    contato: string
     
    @Column({
        type: 'enum',
        enum: UsuarioPapel,
        default: UsuarioPapel.CLIENTE,
    })
    perfil: UsuarioPapel

    @Column()
    senha: string
   // @Column({name:"manutenção"})
    //manutencao: string
}