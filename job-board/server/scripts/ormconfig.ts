import { DataSource } from 'typeorm';

const host = process.env.DATABASE_HOST
  ? process.env.DATABASE_HOST
  : 'localhost';
const port = process.env.DATABASE_PORT ? process.env.DATABASE_PORT : '5432';
const username = process.env.DATABASE_USERNAME
  ? process.env.DATABASE_USERNAME
  : 'postgres';
const password = process.env.DATABASE_PASSWORD
  ? process.env.DATABASE_PASSWORD
  : 'postgres';
const database = process.env.DATABASE_DATABASE_NAME
  ? process.env.DATABASE_DATABASE_NAME
  : 'postgres';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host,
  port: parseInt(port),
  username,
  password,
  database,
  //ssl: {
  //rejectUnauthorized: false,
  //ca: process.env.CA_CERT,
  //},
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['src/db/migrations/*.ts'],
  synchronize: false,
});
