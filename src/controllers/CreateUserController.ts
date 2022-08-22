import { Request, Response, response } from "express"

class CreateUserController {
    handle(request: Request, response: Response) {
        const name = request.body.name;

        return response.status(201).json({ message: `Usuário ${name} criado` })
    }

}

export { CreateUserController }