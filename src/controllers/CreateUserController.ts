import { Request, Response } from "express"
import { CreateUserSevice } from "../services/CreateUserService"

class CreateUserController {
    handle(request: Request, response: Response,) {
        const createUserSevice = new CreateUserSevice()
        const { name, email, password } = request.body

        if (name.length === 0 || email.length === 0 || password.length === 0) {
            return response.status(400).json({ mensagem: "Preencha todos os campos" })
        }
        const user = createUserSevice.execute({
            name,
            email,
            password
        })
        return response.status(201).json({ user })
    }

}

export { CreateUserController }