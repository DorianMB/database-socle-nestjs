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

## Export Database Config

```bash
export default () => ({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10) || 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  autoLoadEntities: true,
});
```