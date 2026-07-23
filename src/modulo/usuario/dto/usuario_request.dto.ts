import { IsEmail, IsEmpty, IsEnum, IsNotEmpty, IsOptional, IsPhoneNumber, Length, MinLength, ValidationArguments } from "class-validator";
import { UsuarioPapel } from "../usuario.papel.enum";
import { MessagePort } from "node:worker_threads";

export class UsuarioRequestDto {
    
    @IsNotEmpty()
    @MinLength(6)
    nome:string
    
    @IsEmail()
    email: string

    @IsPhoneNumber("BR")
    @IsNotEmpty()
    contato:string

    @IsOptional()
    @IsEnum(UsuarioPapel)   //,{message:'perfil inválido'} )
    perfil: UsuarioPapel;

    @IsEmpty({message:"Campo SENHA é obrigadoria"})
    @MinLength(6,{
        message:(args: ValidationArguments)=>
        `O campo'${args.property}' deve conter no minimo 
        ${args.constraints[0]} caracteres`,
    })
    senha:string
}