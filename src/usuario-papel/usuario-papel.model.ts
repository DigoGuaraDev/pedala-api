import { SrvRecord } from "dns"
import { Column, PrimaryGeneratedColumn } from "typeorm"

export class UsuarioPapelModel{ 
    
    @PrimaryGeneratedColumn('uuid')
    ADMid:string

    @Column()
    ADMtring:string

    @Column()
    ADMemail:string
}