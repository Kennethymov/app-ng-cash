import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.PASSWORD_POSTGRES || '123456',
  database: process.env.DATABASE || 'testeNGCash',
  host: process.env.HOST || 'localhost',
  port: Number(process.env.DB_PORT || 5432),
  dialect: 'postgres',
}

module.exports = config;