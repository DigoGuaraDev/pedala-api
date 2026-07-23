import { IsEnum } from "class-validator"
import { StatusEstacao } from "../status.estaco.enum"

export class bicicletaResponseDto{
    id: string
    modelo:string
    marca:string

    @IsEnum(StatusEstacao)
    status: StatusEstacao

    estacaoAtual:string
}