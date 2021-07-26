import { getCustomRepository } from "typeorm"

import { compare } from "bcryptjs"
import { sign } from 'jsonwebtoken'

import { UsersRepositories } from "../repositories/UsersRepositories"

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {

    async execute({ email, password }: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories)
        // Verificar email
        const user = await usersRepositories.findOne({
            email
        })

        if (!user) {
            throw new Error("Email/password incorrect!")
        }

        // Verificar se a senha está correta
        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new Error("Email/password incorrect!" + passwordMatch)
        }
        // Gerar token
        const token = sign(
            {
                email: user.email
            },
            "8f57c2988ed3fa996e3b00719fb1f946",
            {
                subject: user.id,
                expiresIn: "1d"
            }
        )
        return token
    }
}

export { AuthenticateUserService }