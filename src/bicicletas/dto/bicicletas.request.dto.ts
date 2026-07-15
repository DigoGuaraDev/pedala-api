import { IsNotEmpty, IsOptional} from "class-validator"

export class BicicletaRequestDt{

    @IsNotEmpty({ message: "O nome é Obrigatório"})
    nome:string;

    @IsOptional({message: "A cor é Opicional"})
    cor:string;

    raio:number;

    status:boolean;

    modelo_id: string;
    marca_id:string;
}