import { PartialType } from '@nestjs/mapped-types';
import { CreateGameDto } from './create-games.dto';

export class UpdateGameDto extends PartialType(CreateGameDto) {}
