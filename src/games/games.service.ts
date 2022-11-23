import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-games.dto';
import { UpdateGameDto } from './dto/update-games.dto';
import { Games } from './entities/games.entity';

@Injectable()
export class GameService {
  games: Games[] = [];

  handleError(error: Error) {
    console.log(error.message);
    throw new UnprocessableEntityException(error.message);
    return undefined;
  }

  constructor(private readonly prisma: PrismaService) {}

  async update(id: string, dto: UpdateGameDto): Promise<Games> {
    await this.findById(id);

    const data: Partial<Games> = { ...dto };

    return this.prisma.games.update({
      where: { id },
      data,
    });
  }

  findAll(): Promise<Games[]> {
    return this.prisma.games.findMany();
  }

  async findById(id: string): Promise<Games> {
    const newLocal = await this.prisma.games.findUnique({ where: { id } });

    if (!newLocal) {
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`);
    }

    return newLocal;
  }

  async findOne(id: string): Promise<Games> {
    return this.findById(id);
  }

  create(dto: CreateGameDto): Promise<Games> {
    const data: Games = { ...dto };

    return this.prisma.games.create({ data }).catch(this.handleError);
  }

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.games.delete({ where: { id } });
  }
}
