import { CategoryRepository } from '../../domain/repositories/category.repository';
import { CategoryDataSource } from '../datasources/category.datasource';

/**
 * Implementación concreta del repositorio de categorías para el backend Node.js.
 *
 * @remarks
 * Esta clase pertenece a la capa de infraestructura (backend Node.js).
 * Su responsabilidad es actuar como puente entre el caso de uso
 * y la fuente de datos (data source) de categorías.
 *
 * Implementa la interfaz {@link CategoryRepository} definida en el dominio.
 *
 * @example
 * ```typescript
 * // En categories.routes.ts
 * const dataSource = new CategoryDataSource();
 * const repository = new CategoryRepositoryImpl(dataSource);
 * const getAllCategories = new GetAllCategoriesUseCase(repository);
 * ```
 */
export class CategoryRepositoryImpl implements CategoryRepository {
  /**
   * Constructor del repositorio de categorías.
   *
   * @param dataSource - Fuente de datos de categorías (DataSource).
   *
   * @remarks
   * Se utiliza inyección de dependencias por constructor para mantener
   * la separación de responsabilidades y facilitar las pruebas unitarias.
   */
  constructor(private dataSource: CategoryDataSource) {}

  /**
   * Obtiene un listado de categorías desde la fuente de datos.
   *
   * @param count - Número de categorías a obtener.
   * @returns Promesa que resuelve con un arreglo de categorías.
   *
   * @remarks
   * Este método delega la operación al `CategoryDataSource` y
   * envuelve el resultado en una Promesa resuelta con `Promise.resolve()`.
   *
   * El `CategoryDataSource.getAll()` es síncrono, pero se convierte a Promesa
   * para mantener la consistencia asíncrona de la interfaz del repositorio.
   *
   * @example
   * ```typescript
   * const categories = await categoryRepository.getAll(5);
   * console.log(categories); // Array de 5 categorías
   * ```
   */
  getAll(count: number) {
    return Promise.resolve(this.dataSource.getAll(count));
  }
}