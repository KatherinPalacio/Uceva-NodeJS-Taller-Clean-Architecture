import { Router } from "express";

import { MovieDataSource } from "../../datasources/movie.datasource";
import { MovieRepositoryImpl } from "../../repositories/movie.repository.impl";
import { GetAllMoviesUseCase } from "../../../application/usecases/get-all-movies.usecase";
import { MoviesController } from "../controllers/movies.controller";

/**
 * Configuración de rutas para el recurso de películas.
 *
 * @remarks
 * Esta clase pertenece a la capa de infraestructura (backend Node.js).
 * Su responsabilidad es definir los endpoints relacionados con
 * la gestión de películas y conectarlos con el controlador correspondiente.
 *
 * Aplica el patrón de diseño de enrutadores modulares de Express,
 * inyectando las dependencias necesarias:
 * - DataSource → Repository → UseCase → Controller
 *
 * @example
 * ```typescript
 * // En app.routes.ts
 * import { MoviesRoutes } from './movies.routes';
 * router.use("/api/movies", MoviesRoutes.routes);
 * ```
 */
export class MoviesRoutes {
  /**
   * Configura y retorna el enrutador para el recurso de películas.
   *
   * @remarks
   * Esta propiedad estática construye la cadena de dependencias:
   * 1. Crea el `MovieDataSource` (fuente de datos)
   * 2. Crea el `MovieRepositoryImpl` (repositorio)
   * 3. Crea el `GetAllMoviesUseCase` (caso de uso)
   * 4. Crea el `MoviesController` (controlador)
   * 5. Asigna el endpoint GET con el controlador
   *
   * Endpoints disponibles:
   * - `GET /:countMovies` - Obtiene un listado de películas
   *
   * @returns {Router} Enrutador de Express con las rutas de películas.
   *
   * @example
   * ```typescript
   * const movieRouter = MoviesRoutes.routes;
   * router.use("/api/movies", movieRouter);
   * ```
   */
  static get routes(): Router {
    const router = Router();

    // Construcción de dependencias (inyección manual)
    const repository = new MovieRepositoryImpl(new MovieDataSource());
    const getAllMovies = new GetAllMoviesUseCase(repository);
    const controller = new MoviesController(getAllMovies);

    /**
     * @openapi
     * /api/movies/{countMovies}:
     *   get:
     *     summary: Obtener listado de películas
     *     description: Retorna una lista de películas generadas dinámicamente según la cantidad solicitada.
     *     tags:
     *       - Movies
     *     parameters:
     *       - in: path
     *         name: countMovies
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 5
     *         description: Cantidad de películas a generar
     *     responses:
     *       200:
     *         description: Lista de películas generadas
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Movie'
     *       400:
     *         description: Parámetro inválido
     */
    router.get("/:countMovies", controller.getAllMovies);

    return router;
  }
}