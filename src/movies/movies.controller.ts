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
import { CreateMovieDto } from './dto/create-movies.dto';
import { UpdateMovieDto } from './dto/update-movies.dto';
import { Movies } from './entities/movies.entity';
import { MovieService } from './movies.service';

@ApiTags('movies')
@Controller('movies')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Post()
  @ApiOperation({
    summary: 'Adicionar filme',
  })
  create(@Body() dto: CreateMovieDto) {
    return this.movieService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Todos os filmes',
  })
  findAll(): Promise<Movies[]> {
    return this.movieService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Encontrar filme',
  })
  findOne(@Param('id') id: string): Promise<Movies> {
    return this.movieService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar filme pelo ID',
  })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateMovieDto,
  ): Promise<Movies> {
    return this.movieService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Remover filme pelo ID',
  })
  delete(@Param('id') id: string) {
    this.movieService.delete(id);
  }
}
