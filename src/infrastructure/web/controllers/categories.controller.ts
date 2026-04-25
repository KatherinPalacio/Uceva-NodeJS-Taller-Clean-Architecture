import { Request, Response } from "express";
import { GetAllCategoriesUseCase } from "../../../application/usecases/get-all-categories.usecase";
import { HandleError } from "../erros/handle.error";

export class CategoriesController {
  constructor(private getAllCategoriesUseCase: GetAllCategoriesUseCase) {}

  getAllCategories = (req: Request, res: Response): void => {
    const { countCategories } = req.params;

    setTimeout(() => {
      this.getAllCategoriesUseCase
        .execute(Number(countCategories))
        .then((categories) => res.status(201).json(categories))
        .catch((error) => HandleError.error(error, res));
    }, 3000);
  };
}