import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('course')
export class CourseController 
{
    constructor(private readonly courseService: CourseService){}

    @Get()
    getAllCourses()
    {
        return this.courseService.getAllCourses();
    }


    @Get(':id')
    getCourseByID(@Param('id') id: string)
    {
        return this.courseService.getCourseById(Number(id));
    }


    @Post()
    createCourse(@Body() createCoursesDto: CreateCourseDto )
    {
        return this.courseService.createCourse(createCoursesDto);
    }


    @Put(':id')
    updateCourse(@Param('id') id: string, @Body() createCoursesDto: CreateCourseDto)
    {
        return this.courseService.updateCourse(Number(id), createCoursesDto);
    }


    @Patch(':id')
    patchCourse(@Param('id') id:string, @Body() createCoursesDto: CreateCourseDto)
    {
        return this.courseService.patchCourse(Number(id), createCoursesDto);
    }

    @Delete(':id')
    deleteCourse(@Param(':id') id:string)
    {
        return this.courseService.deleteCourse(Number(id));
    }
}
