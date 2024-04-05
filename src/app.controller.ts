import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    /*const user = new User();
    user.firstName = 'John';
    user.lastName = 'Doe';
    user.isActive = true;
    this.appService.create(user).then((user) => {
      console.log(user);
    });*/
    this.appService.findAll().then((users) => {
      console.log(users);
    });
    return this.appService.getHello();
  }
}
