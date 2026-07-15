import { IsIn, IsInt, IsNotEmpty, MinLength, ValidationArguments } from "class-validator"

export class EsatacaoRequestDto{

    @IsNotEmpty({ message :"Campo nome é opricadorio"})
    @MinLength(6, {
        message:(args:ValidationArguments)=> `O campo ${args.property} deve conter no minimo ${args.constraints[0]} caracteres.`
    })
    nome: string

    @IsNotEmpty({message:"campo capacidades é opricadorio"})
    @IsInt()
    capacidad: number

    @IsNotEmpty()
    ativo:boolean
}