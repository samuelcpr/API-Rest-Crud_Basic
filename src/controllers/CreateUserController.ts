import { Request, Response } from "express"
import { CreateUserSevice } from "../services/CreateUserService"

class CreateUserController {
    handle(request: Request, response: Response) {

        const createUserSevice = new CreateUserSevice
        const name = request.body.name;

        if (name.length === 0) {
            return response.status(400).json({ mensagem: "informe um nome de usuário" })
        }

        return response.status(201).json({ message: `Usuário ${name} criado` })
    }

}

export { CreateUserController }