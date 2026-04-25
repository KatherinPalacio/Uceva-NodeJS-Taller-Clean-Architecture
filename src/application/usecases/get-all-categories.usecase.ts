import { CategoryRepository } from '../../domain/repositories/category.repository';

export class GetAllCategoriesUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  execute(count: number) {
    return this.categoryRepository.getAll(count);
  }
}