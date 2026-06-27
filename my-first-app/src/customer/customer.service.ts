import { Injectable } from '@nestjs/common';
import { CreateCustomerDTO } from 'src/dto/create-customer.dto';
import { Customer } from 'src/interfaces/customer.interface';

@Injectable()
export class CustomerService 
{
    private customers: Customer[] = [];

    getAllCustomer():Customer[]
    {
        return this.customers;
    }

    addCustomer(createCustomerDto: CreateCustomerDTO):Customer
    {
        const newCustomer: Customer = {
            id: this.customers.length + 1,
            ...createCustomerDto
        } 
        this.customers.push(newCustomer);
        return newCustomer;
    }
}
