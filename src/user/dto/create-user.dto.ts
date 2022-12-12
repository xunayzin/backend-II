import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsInt,
  IsNumber,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'Email do usuário',
    example: 'email@email.com',
  })
  email: string;

  @IsString()
  @ApiProperty({
    description: 'Nome do usuário. Apenas para exibição',
    example: 'Xunayzin',
  })
  name: string;

  @IsString()
  @MinLength(8)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  @ApiProperty({
    description: 'Senha do usuário para login',
    example: 'Abcd@1234',
  })
  password: string;

  @ApiProperty({
    description: 'A confirmação da senha deve ser igual a senha',
    example: 'Abcd@1234',
  })
  confirmPassword: string;

  @IsString()
  @MinLength(11)
  @ApiProperty({
    description: 'CPF do usuário',
    example: '12345678900',
  })
  CPF: string;
}
