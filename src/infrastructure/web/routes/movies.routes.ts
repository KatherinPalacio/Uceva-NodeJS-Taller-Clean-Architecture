import { Router } from "express";
import { MovieDataSource } from "../../datasources/movie.datasource";
import { MovieRepositoryImpl } from "../../repositories/movie.repository.impl";
import { GetAllMoviesUseCase } from "../../../application/usecases/get-all-movies.usecase";
import { MoviesController } from "../controllers/movies.controller";

export class MoviesRoutes {
  static get routes(): Router {
    const router = Router();
    const repository = new MovieRepositoryImpl(new MovieDataSource());
    const getAllMovies = new GetAllMoviesUseCase(repository);
    const controller = new MoviesController(getAllMovies);

    router.get("/:countMovies", controller.getAllMovies);

    return router;
  }
}