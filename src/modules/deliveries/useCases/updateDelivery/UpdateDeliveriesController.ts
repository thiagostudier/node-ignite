import { Request, Response } from "express";
import { UpdateDeliveriesUseCase } from "./UpdateDeliveriesUseCase";

export class UpdateDeliveriesController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const { id: id_delivery } = request.params;

    const updateDeliverymanUseCase = new UpdateDeliveriesUseCase();
    const delivery = await updateDeliverymanUseCase.execute({
      id_deliveryman,
      id_delivery,
    });

    return response.json(delivery)
  }
}
