import { MovieRepository } from '../../domain/repositories/movie.repository';
import { MovieDataSource } from '../datasources/movie.datasource';

export class MovieRepositoryImpl implements MovieRepository {

  constructor(private dataSource: MovieDataSource) {}

  getAll(count: number) {
    return Promise.resolve(this.dataSource.getAll(count));
  }
}