import { DataSource } from "typeorm";
import { User } from "@entities/user.entity"; 
import { config } from "dotenv";
import { join } from 'path';

config();

const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [User],
    synchronize: false,
    migrations: [join(__dirname, 'migrations/**/*{.ts,.js}')],
    migrationsTableName: 'migrations'
});

export default AppDataSource;
