import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDTO } from 'src/dto/create-customer.dto';

@Controller('customer')
export class CustomerController
{
    constructor(private readonly customerService: CustomerService){}


    @Get()
    getAllCustomer()
    {
        return this.customerService.getAllCustomer();
    }


    @Post()
    addCustomer(@Body() createCustomerDto : CreateCustomerDTO)
    {
        return this.customerService.addCustomer(createCustomerDto);
    }
}