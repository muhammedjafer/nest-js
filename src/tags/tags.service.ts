import { Injectable } from '@nestjs/common';

@Injectable()
export class TagsService {

    getAllTags(): string[] {
        return ['tag1', 'tag2', 'tag3'];
    }
}
