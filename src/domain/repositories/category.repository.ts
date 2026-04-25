import { Category } from '../models/category.model';

export abstract class CategoryRepository {
  abstract getAll(count: number): Promise<Category[]>;
}