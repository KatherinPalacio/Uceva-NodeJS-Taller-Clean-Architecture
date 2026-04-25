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

    router.get("/:countCategories", controller.getAllCategories);

    return router;
  }
}