import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StarWarsModule } from './star-wars/star-wars.module';
import { StarWarsController } from './star-wars/star-wars.controller';
import { StarWarsService } from './star-wars/star-wars.service';

@Module({
  imports: [StarWarsModule],
  controllers: [AppController, StarWarsController],
  providers: [AppService, StarWarsService],
})
export class AppModule {}
