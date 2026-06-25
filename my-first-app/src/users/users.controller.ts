import { Controller, Get } from '@nestjs/common';

@Controller('users') // base route for the controller
export class UsersController 
{
    @Get()
    getALLUsers()
    {
        return "All users fetched successfully";
    }
}
