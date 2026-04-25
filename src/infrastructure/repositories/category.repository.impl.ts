import { CategoryRepository } from '../../domain/repositories/category.repository';
import { CategoryDataSource } from '../datasources/category.datasource';

export class CategoryRepositoryImpl implements CategoryRepository {

  constructor(private dataSource: CategoryDataSource) {}

  getAll(count: number) {
    return Promise.resolve(this.dataSource.getAll(count));
  }
}