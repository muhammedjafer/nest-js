import { Module } from '@nestjs/common';
import { TagsService } from 'src/tags/tags.service';
import { TagsController } from 'src/tags/tags.controller';

@Module({
  controllers: [TagsController],
  providers: [TagsService],
})
export class TagsModule { }
