import { Controller, Get } from '@nestjs/common';
import { TagsService } from 'src/tags/tags.service';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) { }

  @Get('/get-tags')
  getAllTags(): string[] {
    return this.tagsService.getAllTags();
  }
}
