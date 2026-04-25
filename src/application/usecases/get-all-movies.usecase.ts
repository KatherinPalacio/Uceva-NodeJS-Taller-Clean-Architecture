import { MovieRepository } from '../../domain/repositories/movie.repository';

export class GetAllMoviesUseCase {
  constructor(private movieRepository: MovieRepository) {}

  execute(count: number) {
    return this.movieRepository.getAll(count);
  }
}