import { IsEnum, IsNotEmpty, IsOptional} from "class-validator"
import { StatusEstacao } from "../status.estaco.enum";

export class BicicletaRequestDto{

    @IsNotEmpty({ message: "O nome é Obrigatório"})
    nome:string;

    @IsNotEmpty({message:"Campo lotação é obrigatório"})
    estacaoId: string

    raio:number;

    @IsOptional({message: "Campo modelo é obrigatório "})
    @IsEnum(StatusEstacao,
{message:`Status inválido.Valores permitidos; EM_USO,DISPONIVE,EM_MANUTENCAO, INATIVO`

})
    status: StatusEstacao

    @IsNotEmpty({message: "Campo modelo é obrigatório"})
    modelo_id: string;

}