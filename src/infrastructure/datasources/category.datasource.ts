import { faker } from '@faker-js/faker';

import { Category } from '../../domain/models/category.model';

/**
 * Fuente de datos para la generación de categorías simuladas.
 *
 * @remarks
 * Esta clase pertenece a la capa de infraestructura (backend Node.js).
 * Su responsabilidad es generar datos simulados (mock) de categorías
 * utilizando la librería Faker.js.
 *
 * No se conecta a una base de datos real ni a una API externa;
 * todos los datos son generados dinámicamente en memoria.
 *
 * @example
 * ```typescript
 * // En category.repository.impl.ts
 * const dataSource = new CategoryDataSource();
 * const categories = dataSource.getAll(5);
 * console.log(categories); // Array de 5 categorías simuladas
 * ```
 */
export class CategoryDataSource {
  /**
   * Genera un listado de categorías simuladas.
   *
   * @param count - Número de categorías a generar.
   * @returns Arreglo de categorías simuladas.
   *
   * @remarks
   * Este método genera categorías con las siguientes características:
   * - **id**: Número secuencial comenzando desde 1.
   * - **name**: Seleccionado aleatoriamente de una lista predefinida de 6 categorías.
   * - **description**: Oración aleatoria generada por Faker.
   *
   * Las categorías disponibles incluyen:
   * - 'Estrenos'
   * - 'Populares'
   * - 'Recomendadas'
   * - 'Clasicas'
   * - 'Familiares'
   * - 'Documentales'
   *
   * La generación es síncrona y se realiza completamente en memoria.
   *
   * @example
   * ```typescript
   * const categories = categoryDataSource.getAll(3);
   * // Resultado ejemplo:
   * // [
   * //   { id: 1, name: 'Estrenos', description: 'Películas recientemente agregadas' },
   * //   { id: 2, name: 'Populares', description: 'Las más vistas del momento' },
   * //   { id: 3, name: 'Recomendadas', description: 'Basadas en tus gustos' }
   * // ]
   * ```
   */
  getAll(count: number): Category[] {
    return Array.from({ length: count }, (_, index) => ({
      id: index + 1,
      name: faker.helpers.arrayElement([
        'Estrenos',
        'Populares',
        'Recomendadas',
        'Clasicas',
        'Familiares',
        'Documentales',
      ]),
      description: faker.lorem.sentence(),
    }));
  }
}