import { faker } from '@faker-js/faker';
import { Category } from '../../domain/models/category.model';

export class CategoryDataSource {
  getAll(count: number): Category[] {
    return Array.from({ length: count }, (_, index) => ({
      id: index + 1,
      name: faker.helpers.arrayElement(['Estrenos', 'Populares', 'Recomendadas', 'Clásicas', 'Familiares']),
      description: faker.commerce.productDescription(),
    }));
  }
}