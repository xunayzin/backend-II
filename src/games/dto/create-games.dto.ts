import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateGameDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'O número do jogo',
    example: 1,
  })
  number: number;

  @IsString()
  @ApiProperty({
    description: 'titulo',
    example: 'God of War',
  })
  title: string;

  // @IsNumber()
  // @IsPositive()
  // @ApiProperty({
  //   description: 'Nota do jogo de 1 a 5(0- muito ruim, 5-muito bom) ',
  //   example: 2,
  // })
  // score: number;
}
