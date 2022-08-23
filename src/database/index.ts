import { Connection, createConnection, getConnection } from "typeorm";

export default async (): Promise<Connection> => {
    const defaltOption = await getConnection();
    return createConnection(
        Object.assign(defaltOption)
    )
}