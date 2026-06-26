import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CourseService } from './course.service';

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
    createCourse(@Body() course:{name:string, description:string} )
    {
        return this.courseService.createCourse(course);
    }


    @Put(':id')
    updateCourse(@Param('id') id: string, @Body() course: {name: string, description: string})
    {
        return this.courseService.updateCourse(Number(id), course);
    }


    @Patch(':id')
    patchCourse(@Param('id') id:string, @Body() course:{name: string, description: string})
    {
        return this.courseService.patchCourse(Number(id), course);
    }

    @Delete(':id')
    deleteCourse(@Param(':id') id:string)
    {
        return this.courseService.deleteCourse(Number(id));
    }
}
