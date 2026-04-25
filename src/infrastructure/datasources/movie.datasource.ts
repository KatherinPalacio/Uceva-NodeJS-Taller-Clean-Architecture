import { faker } from '@faker-js/faker';
import { Movie } from '../../domain/models/movie.model';

export class MovieDataSource {
  getAll(count: number): Movie[] {
    return Array.from({ length: count }, (_, index) => ({
      id: index + 1,
      name: faker.helpers.arrayElement([
        'El Caballero de la Noche',
        'Inception',
        'Matrix',
        'Titanic',
        'Avatar',
        'Gladiador',
        'Toy Story',
        'El Padrino',
        'Pulp Fiction',
        'Forrest Gump'
      ]),
      genre: faker.helpers.arrayElement([
        'Accion', 
        'Comedia', 
        'Drama', 
        'Terror',
        'Ciencia Ficcion',
        'Romance',
        'Aventura'
      ]),
      year: faker.number.int({ min: 1990, max: 2026 }),
    }));
  }
}