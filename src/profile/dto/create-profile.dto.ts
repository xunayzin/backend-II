import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do perfil. Deve ser único',
    example: 'xunay',
  })
  title: string;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem a ser utilizada',
    example:
      'https://www.lance.com.br/galerias/wp-content/uploads/2022/08/298845762_438073454927249_9046020471478606160_n-711x474.jpg',
  })
  imageURL: string;
}
