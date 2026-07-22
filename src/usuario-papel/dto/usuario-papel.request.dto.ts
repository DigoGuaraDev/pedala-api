import { IsEmail, IsNotEmpty, MinLength } from "class-validator"

export class UsuarioPapelRequestDto{

    @IsNotEmpty()
    @MinLength(7)
    nome:string

    @IsEmail()
    email:string
}