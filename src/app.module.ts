import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './games/games.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [GameModule, PrismaModule, UserModule, ProfileModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
