import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IComplimentRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService {
    async execute({ tag_id, user_receiver, user_sender, message }: IComplimentRequest) {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories)
        const usersRepositories = getCustomRepository(UsersRepositories)

        const userReceiver = await usersRepositories.findOne(user_receiver)

        // Verificar se alguem está tentando fazer um elogio a sí próprio
        if (user_receiver === user_sender) {
            throw new Error("Incorrect user receiver");
        }

        if (!userReceiver) {
            throw new Error("User receiver does not exists!")
        }

        const compliment = complimentsRepositories.create({
            tag_id,
            user_sender,
            user_receiver,
            message
        })

        await complimentsRepositories.save(compliment)

        return compliment
    }
}

export { CreateComplimentService }