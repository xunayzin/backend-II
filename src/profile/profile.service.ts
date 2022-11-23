import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfileService {
  profile: Profile[] = [];

  handleError(error: Error) {
    console.log(error.message);
    throw new UnprocessableEntityException(error.message);
    return undefined;
  }

  constructor(private readonly prisma: PrismaService) {}

  async update(id: string, dto: UpdateProfileDto): Promise<Profile> {
    await this.findById(id);

    const data: Partial<Profile> = { ...dto };

    return this.prisma.profile.update({
      where: { id },
      data,
    });
  }

  findAll(): Promise<Profile[]> {
    return this.prisma.profile.findMany();
  }

  async findById(id: string): Promise<Profile> {
    const newLocal = await this.prisma.profile.findUnique({ where: { id } });

    if (!newLocal) {
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`);
    }

    return newLocal;
  }

  async findOne(id: string): Promise<Profile> {
    return this.findById(id);
  }

  create(dto: CreateProfileDto): Promise<Profile> {
    const data: Profile = { ...dto };

    return this.prisma.profile.create({ data }).catch(this.handleError);
  }

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.profile.delete({ where: { id } });
  }
}
