import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min } from "class-validator";

export class CreateCourseDto
{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    code: string;

    @IsString()
    @IsNotEmpty()
    instructor: string;


    @Type(()=> Number)
    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    @Max(6)
    credits: number;

    @IsString()
    @IsOptional()
    description: string;
}