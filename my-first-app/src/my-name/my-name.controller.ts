import { Body, Controller, Post } from '@nestjs/common';
import { UppercasePipe } from 'src/common/pipes/uppercase/uppercase.pipe';

@Controller('my-name')
export class MyNameController 
{
    @Post('custom')
    tranformName(@Body('name' , new UppercasePipe()) name: string) // @Body(fieldName, pipe) variableName: DataType
    {
        return {message : `Receieved Name ${name}`}
    }

}
