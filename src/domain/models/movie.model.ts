/**
 * Modelo de dominio que representa una película en el backend Node.js.
 *
 * @remarks
 * Este modelo pertenece a la capa de dominio del backend Node.js.
 * Define la estructura mínima que debe tener una película
 * dentro del sistema, independientemente de la fuente de datos.
 *
 * A diferencia del frontend Angular, este modelo utiliza `genre: string`
 * en lugar de un tipo específico, permitiendo mayor flexibilidad
 * en los valores provenientes de la fuente de datos.
 *
 * @example
 * ```typescript
 * const pelicula: Movie = {
 *   id: 1,
 *   name: 'Interestelar',
 *   genre: 'Drama',
 *   year: 2014
 * };
 * ```
 */
export interface Movie {
  /**
   * Identificador único de la película.
   */
  id: number;

  /**
   * Nombre o título de la película.
   */
  name: string;

  /**
   * Género cinematográfico de la película.
   *
   * @remarks
   * Es un string abierto que puede contener valores como:
   * 'Accion', 'Comedia', 'Drama', 'Terror', 'Ciencia Ficcion',
   * 'Romance', 'Aventura', entre otros.
   */
  genre: string;

  /**
   * Año de lanzamiento de la película.
   */
  year: number;
}