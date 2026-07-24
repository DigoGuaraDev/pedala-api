import { IsEnum, IsNotEmpty } from "class-validator"
import { StatusManutencao } from "../Status.manutencao.enum"

export class ManutencaoRequestDto {

    @IsNotEmpty({message:'O Campo responsavel é Obrigadorio'})
    responsavel:string

    @IsNotEmpty({message: 'O Campo Bicicleta é Obrigadorio'})
    bicicleta_id: string

    @IsNotEmpty({message:"O Campo Descricao é Obrigadori"})
    descricao:string

    @IsEnum(StatusManutencao,{message:`Status Invalidos.Valores Permitidos;EM_ANDAMENTO,PENDENTE,CONCLUIDO`})
    status: StatusManutencao

}