import { faker } from '@faker-js/faker';
import { Movie } from '../../domain/models/movie.model';

export class MovieDataSource {
  getAll(count: number): Movie[] {
    return Array.from({ length: count }, (_, index) => ({
      id: index + 1,
      name: faker.music.songName(),
      genre: faker.helpers.arrayElement(['Accion', 'Comedia', 'Drama', 'Terror']),
      year: faker.number.int({ min: 1990, max: 2026 }),
    }));
  }
}