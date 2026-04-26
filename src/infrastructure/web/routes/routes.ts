import { Router } from "express";

import { UsersRoutes } from "./users.routes";
import { ProductsRoutes } from "./products.routes";
import { MoviesRoutes } from "./movies.routes";
import { CategoriesRoutes } from "./categories.routes";

/**
 * Configuración principal de rutas de la aplicación backend.
 *
 * @remarks
 * Esta clase pertenece a la capa de infraestructura (backend Node.js).
 * Su responsabilidad es centralizar y organizar todas las rutas
 * de la API, delegando cada recurso a su respectivo enrutador.
 *
 * Las rutas se agrupan por recurso bajo el prefijo `/api`:
 * - `/api/users` - Gestión de usuarios
 * - `/api/products` - Gestión de productos
 * - `/api/movies` - Gestión de películas
 * - `/api/categories` - Gestión de categorías
 *
 * @example
 * ```typescript
 * // En el archivo principal del servidor (app.ts o server.ts)
 * import express from 'express';
 * import { AppRoutes } from './routes/app.routes';
 *
 * const app = express();
 * app.use(AppRoutes.routes);
 * ```
 */
export class AppRoutes {
  /**
   * Configura y retorna el enrutador principal de la aplicación.
   *
   * @remarks
   * Esta propiedad estática crea una instancia de `Router` de Express
   * y le asigna los diferentes submódulos de rutas.
   *
   * Cada submódulo se monta en un prefijo específico:
   * - UsersRoutes → `/api/users`
   * - ProductsRoutes → `/api/products`
   * - MoviesRoutes → `/api/movies`
   * - CategoriesRoutes → `/api/categories`
   *
   * @returns {Router} Enrutador de Express configurado con todas las rutas.
   *
   * @example
   * ```typescript
   * const mainRouter = AppRoutes.routes;
   * app.use(mainRouter);
   * ```
   */
  static get routes(): Router {
    const router = Router();

    // Rutas de usuarios
    router.use("/api/users", UsersRoutes.routes);

    // Rutas de productos
    router.use("/api/products", ProductsRoutes.routes);

    // Rutas de películas
    router.use("/api/movies", MoviesRoutes.routes);

    // Rutas de categorías
    router.use("/api/categories", CategoriesRoutes.routes);

    return router;
  }
}