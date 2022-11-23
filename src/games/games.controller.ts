import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateGameDto } from './dto/create-games.dto';
import { UpdateGameDto } from './dto/update-games.dto';
import { Games } from './entities/games.entity';
import { GameService } from './games.service';

@ApiTags('games')
@Controller('games')
export class GameController {
  constructor(private gameService: GameService) {}

  @Post()
  @ApiOperation({
    summary: 'Adicionar jogo',
  })
  create(@Body() dto: CreateGameDto) {
    return this.gameService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Todos os jogos',
  })
  findAll(): Promise<Games[]> {
    return this.gameService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Encontrar jogo',
  })
  findOne(@Param('id') id: string): Promise<Games> {
    return this.gameService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar jogo pelo ID',
  })
  update(@Param('id') id: string, @Body() dto: UpdateGameDto): Promise<Games> {
    return this.gameService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Remover jogo pelo ID',
  })
  delete(@Param('id') id: string) {
    this.gameService.delete(id);
  }
}
