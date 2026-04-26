import { faker } from '@faker-js/faker';

import { Movie } from '../../domain/models/movie.model';

/**
 * Fuente de datos para la generación de películas simuladas.
 *
 * @remarks
 * Esta clase pertenece a la capa de infraestructura (backend Node.js).
 * Su responsabilidad es generar datos simulados (mock) de películas
 * utilizando la librería Faker.js.
 *
 * No se conecta a una base de datos real ni a una API externa;
 * todos los datos son generados dinámicamente en memoria.
 *
 * @example
 * ```typescript
 * // En movie.repository.impl.ts
 * const dataSource = new MovieDataSource();
 * const movies = dataSource.getAll(5);
 * console.log(movies); // Array de 5 películas simuladas
 * ```
 */
export class MovieDataSource {
  /**
   * Genera un listado de películas simuladas.
   *
   * @param count - Número de películas a generar.
   * @returns Arreglo de películas simuladas.
   *
   * @remarks
   * Este método genera películas con las siguientes características:
   * - **id**: Número secuencial comenzando desde 1.
   * - **name**: Seleccionado aleatoriamente de una lista predefinida de 10 películas.
   * - **genre**: Seleccionado aleatoriamente de una lista de 7 géneros.
   * - **year**: Año aleatorio entre 1990 y 2026.
   *
   * La generación es síncrona y se realiza completamente en memoria.
   *
   * @example
   * ```typescript
   * const movies = movieDataSource.getAll(3);
   * // Resultado ejemplo:
   * // [
   * //   { id: 1, name: 'Matrix', genre: 'Accion', year: 1999 },
   * //   { id: 2, name: 'Titanic', genre: 'Drama', year: 1997 },
   * //   { id: 3, name: 'Toy Story', genre: 'Aventura', year: 1995 }
   * // ]
   * ```
   */
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