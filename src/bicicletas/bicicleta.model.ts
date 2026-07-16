import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { ModeloModel } from "../modelo/modelo.model"
import { MarcaModel } from "src/marca/marca.model"
import { EstacaoModel } from "src/manter-estacoes/estacao.model"
import { StatusEstacao } from "./status.estaco.enum"

@Entity("bicicletas")
export class BicicletaModel {

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({
    type:'enum',
    enum: StatusEstacao,
    default: StatusEstacao.DISPONIVEL})
    status: boolean

    @ManyToOne(() => EstacaoModel)
    @JoinColumn({name:"estacao_id"})
    lotacao: EstacaoModel

    @CreateDateColumn({name:"dt_cadastro",update:false})
    dataCadastro: Date

    @UpdateDateColumn({name:"dt_atualizar",update:true})
    dataDEAtualizacao: Date

    @ManyToOne(()=> ModeloModel)
    @JoinColumn({ name:'modelo_id'})
    modelo:ModeloModel;

   // @ManyToOne(()=> MarcaModel )
    //@JoinColumn({ name: 'marca_id'})
   // marca:MarcaModel;
}