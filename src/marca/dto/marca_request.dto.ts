import { IsNotEmpty, MinLength, ValidationArguments } from "class-validator";

export class MarcaRequestDto {

    @IsNotEmpty({message:"Campo nome é opricadorio"})
    @MinLength(6,{ 
        message:(args:ValidationArguments)=>`O campo ${args.property} deve conter no minimo ${args.constraints[0]}Characteres}`
    })
    nomeMarca:string

}