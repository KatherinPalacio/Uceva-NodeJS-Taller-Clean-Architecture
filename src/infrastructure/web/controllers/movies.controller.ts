import { Request, Response } from "express";

import { GetAllMoviesUseCase } from "../../../application/usecases/get-all-movies.usecase";
import { HandleError } from "../erros/handle.error";

/**
 * Controlador encargado de manejar las peticiones HTTP relacionadas con películas.
 *
 * @remarks
 * Esta clase pertenece a la capa de infraestructura (backend Node.js).
 * Su responsabilidad es recibir las peticiones HTTP, extraer los parámetros,
 * invocar el caso de uso correspondiente y enviar la respuesta al cliente.
 *
 * Implementa un retraso artificial de 3 segundos (setTimeout) para simular
 * latencia de red y demostrar comportamientos asíncronos.
 *
 * @example
 * ```typescript
 * // En movies.routes.ts
 * const getAllMovies = new GetAllMoviesUseCase(repository);
 * const controller = new MoviesController(getAllMovies);
 * router.get("/:countMovies", controller.getAllMovies);
 * ```
 */
export class MoviesController {
  /**
   * Constructor del controlador de películas.
   *
   * @param getAllMoviesUseCase - Caso de uso para obtener el listado de películas.
   *
   * @remarks
   * Se utiliza inyección de dependencias por constructor para mantener
   * el principio de inversión de dependencias.
   */
  constructor(private getAllMoviesUseCase: GetAllMoviesUseCase) {}

  /**
   * Maneja la petición GET para obtener un listado de películas.
   *
   * @param req - Objeto de solicitud de Express.
   * @param res - Objeto de respuesta de Express.
   * @returns void - La respuesta se envía asíncronamente mediante res.json().
   *
   * @remarks
   * Este método extrae el parámetro `countMovies` de la URL,
   * ejecuta el caso de uso y retorna las películas obtenidas.
   *
   * **Características:**
   * - Implementa un retraso artificial de 3 segundos (setTimeout) para simular latencia.
   * - Responde con código HTTP 201 (Created) en caso de éxito.
   * - En caso de error, delega el manejo a `HandleError.error()`.
   *
   * @example
   * ```typescript
   * // GET /api/movies/5
   * // Respuesta: Array de 5 películas con código 201 después de 3 segundos
   * ```
   */
  getAllMovies = (req: Request, res: Response): void => {
    const { countMovies } = req.params;

    setTimeout(() => {
      this.getAllMoviesUseCase
        .execute(Number(countMovies))
        .then((movies) => res.status(201).json(movies))
        .catch((error) => HandleError.error(error, res));
    }, 3000);
  };
}