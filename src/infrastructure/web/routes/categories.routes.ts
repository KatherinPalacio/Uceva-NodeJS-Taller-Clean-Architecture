import { Router } from "express";
import { CategoryDataSource } from "../../datasources/category.datasource";
import { CategoryRepositoryImpl } from "../../repositories/category.repository.impl";
import { GetAllCategoriesUseCase } from "../../../application/usecases/get-all-categories.usecase";
import { CategoriesController } from "../controllers/categories.controller";

export class CategoriesRoutes {
  static get routes(): Router {
    const router = Router();
    const repository = new CategoryRepositoryImpl(new CategoryDataSource());
    const getAllCategories = new GetAllCategoriesUseCase(repository);
    const controller = new CategoriesController(getAllCategories);

    /**
 * @openapi
 * /api/categories/{countCategories}:
 *   get:
 *     summary: Obtener listado de categorías
 *     description: Retorna una lista de categorías generadas dinámicamente según la cantidad solicitada.
 *     tags:
 *       - Categories
 *     parameters:
 *       - in: path
 *         name: countCategories
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *           example: 5
 *         description: Cantidad de categorías a generar
 *     responses:
 *       200:
 *         description: Lista de categorías generadas
 *       400:
 *         description: Parámetro inválido
 */
router.get("/:countCategories", controller.getAllCategories);
    router.get("/:countCategories", controller.getAllCategories);

    return router;
  }
}