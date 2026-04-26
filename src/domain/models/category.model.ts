/**
 * Modelo de dominio que representa una categoría de películas en el backend Node.js.
 *
 * @remarks
 * Este modelo pertenece a la capa de dominio del backend Node.js.
 * Define la estructura mínima que debe tener una categoría
 * dentro del sistema, independientemente de la fuente de datos.
 *
 * Las categorías permiten clasificar las películas en grupos
 * como: Estrenos, Populares, Recomendadas, Clásicas, Familiares, etc.
 *
 * @example
 * ```typescript
 * const categoria: Category = {
 *   id: 1,
 *   name: 'Estrenos',
 *   description: 'Películas recientemente agregadas'
 * };
 * ```
 */
export interface Category {
  /**
   * Identificador único de la categoría.
   */
  id: number;

  /**
   * Nombre de la categoría.
   *
   * @remarks
   * Ejemplos comunes: 'Estrenos', 'Populares', 'Recomendadas',
   * 'Clasicas', 'Familiares', 'Documentales'.
   */
  name: string;

  /**
   * 
   * Descripción informativa de la categoría.
   *
   * @remarks
   * Explica qué tipo de películas agrupa esta categoría.
   * Ejemplo: 'Películas más vistas por los usuarios'.
   * 
   */
  description: string;
}