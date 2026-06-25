import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';
import { EmployeesModule } from './employees/employees.module';
import { CategoriesModule } from './categories/categories.module';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [EmployeesModule, CategoriesModule, StudentsModule],
  controllers: [AppController, UsersController, ProductsController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
