import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsPhoneNumber, MinLength } from "class-validator";
import { UsuarioPapel } from "../usuario.papel.enum";

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
    @IsEnum(UsuarioPapel,{message:'papel inválido'} )
    papeis: UsuarioPapel;
}