import { Router } from "express"
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController"

const routes = Router()

/** Controllers */
const createClientController = new CreateClientController();

/** Rotas */
routes.post("/client/", createClientController.handle)

export { routes }