import { Movie } from '../models/movie.model';

export abstract class MovieRepository {
  abstract getAll(count: number): Promise<Movie[]>;
}