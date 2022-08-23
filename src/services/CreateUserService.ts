
interface IUsuario {
    name: string,
    email: string,
    password: string
}

class CreateUserSevice {
    execute({ name, email, password }: IUsuario) {
        const data = [];

        data.push({ name, email, password });

        return data;
    }
}

export { CreateUserSevice }