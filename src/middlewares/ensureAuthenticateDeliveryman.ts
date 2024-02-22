import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateDeliveryman(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization

  /** Caso não tenha um token */
  if (!authHeader) {
    return response.status(401).json({
      message: "Token missing!"
    })
  }

  // Bearer 0123456789
  const [, token] = authHeader.split(" ")

  try {
    const { sub } = verify(token, "019acc25a4e242bb55ad489832ada12d") as IPayload
    
    /** Inserir novas informações ao request */
    request.id_deliveryman = sub

    return next()
  } catch (error) {
    return response.status(401).json({
      message: "Invalid token!"
    })
  }

}
