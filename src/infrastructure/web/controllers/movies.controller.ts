import { Request, Response } from "express";
import { GetAllMoviesUseCase } from "../../../application/usecases/get-all-movies.usecase";
import { HandleError } from "../erros/handle.error";

export class MoviesController {
  constructor(private getAllMoviesUseCase: GetAllMoviesUseCase) {}

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