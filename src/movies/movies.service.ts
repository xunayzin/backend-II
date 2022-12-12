import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMovieDto } from './dto/create-movies.dto';
import { UpdateMovieDto } from './dto/update-movies.dto';
import { Movies } from './entities/movies.entity';

@Injectable()
export class MovieService {
  movies: Movies[] = [];

  handleError(error: Error) {
    console.log(error.message);
    throw new UnprocessableEntityException(error.message);
    return undefined;
  }

  constructor(private readonly prisma: PrismaService) {}

  async update(id: string, dto: UpdateMovieDto): Promise<Movies> {
    await this.findById(id);

    const data: Partial<Movies> = { ...dto };

    return this.prisma.movies.update({
      where: { id },
      data,
    });
  }

  findAll(): Promise<Movies[]> {
    return this.prisma.movies.findMany();
  }

  async findById(id: string): Promise<Movies> {
    const newLocal = await this.prisma.movies.findUnique({ where: { id } });

    if (!newLocal) {
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`);
    }

    return newLocal;
  }

  async findOne(id: string): Promise<Movies> {
    return this.findById(id);
  }

  create(dto: CreateMovieDto): Promise<Movies> {
    const data: Movies = { ...dto };

    return this.prisma.movies.create({ data }).catch(this.handleError);
  }

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.movies.delete({ where: { id } });
  }
}
