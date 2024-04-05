import * as process from 'node:process';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: 'root',
  password: 'root',
  database: 'test',
  autoLoadEntities: true,
  logging: process.env.LOGGING === 'true',
};
