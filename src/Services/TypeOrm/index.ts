import {getConnectionManager, ConnectionManager, Connection} from "typeorm";

import DatabaseHelperInterface from '../../interfaces/DatabaseHelperInterface';



export class TypeOrmHelper implements DatabaseHelperInterface {
    async connect() {
        const connectionManager: ConnectionManager = getConnectionManager();
        const connection: Connection = connectionManager.create({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "password",
            database: "db",
            entities: [__dirname + "/entity/*{.js,.ts}"],
            synchronize: true
        });
        await connection.connect();
        const isConnected: boolean = connection.isConnected;
        console.log(`Database connect succesfully! ${isConnected}`);
    }
}