import { Router } from "express";
import { UsersRoutes } from "./users.routes";
import { ProductsRoutes } from "./products.routes";

// 🔥 NUEVAS IMPORTACIONES
import { MoviesRoutes } from "./movies.routes";
import { CategoriesRoutes } from "./categories.routes";

export class AppRoutes {

  static get routes(): Router {
    const router = Router();

    // Rutas existentes
    router.use("/api/users", UsersRoutes.routes);
    router.use("/api/products", ProductsRoutes.routes);

    // 🔥 NUEVAS RUTAS
    router.use("/api/movies", MoviesRoutes.routes);
    router.use("/api/categories", CategoriesRoutes.routes);

    return router;
  }
}