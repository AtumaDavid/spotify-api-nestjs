import { CreateSongDTO } from './dto/create-song-dto';
import { SongsService } from './songs.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Put,
} from '@nestjs/common';

@Controller('songs')
export class SongsController {
  constructor(private SongsService: SongsService) {}

  @Post()
  create(@Body() createSongDTO: CreateSongDTO) {
    this.SongsService.create(createSongDTO);
  }

  @Get()
  findAll() {
    try {
      return this.SongsService.findAll();
    } catch (error) {
      throw new HttpException(
        'server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
  }

  @Get(':id')
  fineOne() {
    return 'finnd a song based on id';
  }

  @Put(':id')
  update() {
    return 'update a song';
  }

  @Delete(':id')
  delete() {
    return 'delete a song';
  }
}
