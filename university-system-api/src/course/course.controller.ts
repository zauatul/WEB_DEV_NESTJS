import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}


  @Get()
  getAllCourses()
  {
    return this.courseService.getAllCourses();
  }


  @Get(':id')
  getCourseById(@Param('id')id: string)
  {
    return this.courseService.getCourseById(Number(id));
  }

  @Post()
  createCourse(@Body() course: {name: string; code: string})
  {
    return this.courseService.createCourse(course);
  }
}
