import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'O número do filme',
    example: 1,
  })
  number: number;

  @IsString()
  @ApiProperty({
    description: 'titulo',
    example: 'Harry Potter',
  })
  title: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'Nota do filme de 1 a 5(0- muito ruim, 5-muito bom) ',
    example: 2,
  })
  score: number;


@IsNumber()
@IsPositive()
@ApiProperty({
    description: 'Ano de lançamento',
    example: 2022,
  })
  year: number;
  
  @IsString()
  @ApiProperty({
    description: 'gênero do filme',
    example: 'Sci-Fi',
  })
  genre: string;
}