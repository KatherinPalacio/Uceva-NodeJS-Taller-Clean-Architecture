import { Request, Response } from "express";

import { GetAllCategoriesUseCase } from "../../../application/usecases/get-all-categories.usecase";
import { HandleError } from "../erros/handle.error";

/**
 * Controlador encargado de manejar las peticiones HTTP relacionadas con categorías.
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
 * // En categories.routes.ts
 * const getAllCategories = new GetAllCategoriesUseCase(repository);
 * const controller = new CategoriesController(getAllCategories);
 * router.get("/:countCategories", controller.getAllCategories);
 * ```
 */
export class CategoriesController {
  /**
   * Constructor del controlador de categorías.
   *
   * @param getAllCategoriesUseCase - Caso de uso para obtener el listado de categorías.
   *
   * @remarks
   * Se utiliza inyección de dependencias por constructor para mantener
   * el principio de inversión de dependencias.
   */
  constructor(private getAllCategoriesUseCase: GetAllCategoriesUseCase) {}

  /**
   * Maneja la petición GET para obtener un listado de categorías.
   *
   * @param req - Objeto de solicitud de Express.
   * @param res - Objeto de respuesta de Express.
   * @returns void - La respuesta se envía asíncronamente mediante res.json().
   *
   * @remarks
   * Este método extrae el parámetro `countCategories` de la URL,
   * ejecuta el caso de uso y retorna las categorías obtenidas.
   *
   * **Características:**
   * - Implementa un retraso artificial de 3 segundos (setTimeout) para simular latencia.
   * - Responde con código HTTP 201 (Created) en caso de éxito.
   * - En caso de error, delega el manejo a `HandleError.error()`.
   *
   * @example
   * ```typescript
   * // GET /api/categories/5
   * // Respuesta: Array de 5 categorías con código 201 después de 3 segundos
   * ```
   */
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