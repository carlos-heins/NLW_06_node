import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    // Receber o token
    const authToken = req.headers.authorization

    // Validar se o authToken está preenchido
    if (!authToken) {
        return res.status(401).end();
    }

    const [, token] = authToken.split(" ")
    
    // Verificar se o token é válido
    try {
        const {sub} = verify(token, "8f57c2988ed3fa996e3b00719fb1f946") as IPayload

        req.user_id = sub

        return next()
    } catch (err) {
        return res.status(401).end()
    }

    // Recuperar informações do usuário

}