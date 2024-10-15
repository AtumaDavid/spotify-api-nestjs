import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  // local db

  private readonly songs = [];

  create(song) {
    // save the songs in the database
    this.songs.push(song);
    return this.songs;
  }

  findAll() {
    // fetch songs from database
    return this.songs;
  }
}
