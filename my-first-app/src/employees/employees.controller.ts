import { Controller, Get } from '@nestjs/common';

@Controller('employees')
export class EmployeesController 
{
    @Get()
    getAllEmployees()
    {
        return "All employees fetched successfully";
    }
}
