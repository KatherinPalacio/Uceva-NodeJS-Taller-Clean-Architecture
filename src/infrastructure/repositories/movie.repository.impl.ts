import { MovieRepository } from '../../domain/repositories/movie.repository';
import { MovieDataSource } from '../datasources/movie.datasource';

/**
 * Implementación concreta del repositorio de películas para el backend Node.js.
 *
 * @remarks
 * Esta clase pertenece a la capa de infraestructura (backend Node.js).
 * Su responsabilidad es actuar como puente entre el caso de uso
 * y la fuente de datos (data source) de películas.
 *
 * Implementa la interfaz {@link MovieRepository} definida en el dominio.
 *
 * @example
 * ```typescript
 * // En movies.routes.ts
 * const dataSource = new MovieDataSource();
 * const repository = new MovieRepositoryImpl(dataSource);
 * const getAllMovies = new GetAllMoviesUseCase(repository);
 * ```
 */
export class MovieRepositoryImpl implements MovieRepository {
  /**
   * Constructor del repositorio de películas.
   *
   * @param dataSource - Fuente de datos de películas (DataSource).
   *
   * @remarks
   * Se utiliza inyección de dependencias por constructor para mantener
   * la separación de responsabilidades y facilitar las pruebas unitarias.
   */
  constructor(private dataSource: MovieDataSource) {}

  /**
   * Obtiene un listado de películas desde la fuente de datos.
   *
   * @param count - Número de películas a obtener.
   * @returns Promesa que resuelve con un arreglo de películas.
   *
   * @remarks
   * Este método delega la operación al `MovieDataSource` y
   * envuelve el resultado en una Promesa resuelta con `Promise.resolve()`.
   *
   * El `MovieDataSource.getAll()` es síncrono, pero se convierte a Promesa
   * para mantener la consistencia asíncrona de la interfaz del repositorio.
   *
   * @example
   * ```typescript
   * const movies = await movieRepository.getAll(5);
   * console.log(movies); // Array de 5 películas
   * ```
   */
  getAll(count: number) {
    return Promise.resolve(this.dataSource.getAll(count));
  }
}