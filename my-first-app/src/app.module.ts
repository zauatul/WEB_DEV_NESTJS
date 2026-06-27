import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';
import { EmployeesModule } from './employees/employees.module';
import { CategoriesModule } from './categories/categories.module';
import { StudentsModule } from './students/students.module';
import { CustomerService } from './customer/customer.service';
import { CustomerModule } from './customer/customer.module';
import { MyNameController } from './my-name/my-name.controller';

@Module({
  imports: [EmployeesModule, CategoriesModule, StudentsModule, CustomerModule],
  controllers: [AppController, UsersController, ProductsController, MyNameController],
  providers: [AppService, ProductsService, CustomerService],
})
export class AppModule {}
