## Installation

```bash
$ npm install --save @nestjs/typeorm typeorm mysql2
```

## Add to main module

```bash
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      autoLoadEntities: true,
    }),
  ],
})
```

## Add ConfigModule

```bash
# create a .env file in the root of the project
# use ConfigModule to load the .env file

imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({this.configService.get('database')}),
  ],
```

## Add a model to the project

```bash
# create a user model
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}

# add the model to the module
TypeOrmModule.forFeature([User]),
```

## Export Database Config

```bash
import * as process from 'node:process';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  autoLoadEntities: true,
  logging: process.env.LOGGING === 'true',
};

```