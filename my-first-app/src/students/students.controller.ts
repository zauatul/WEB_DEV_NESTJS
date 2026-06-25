import { Controller, Get, Post, Put, Patch, Delete, Param, Body} from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  getAllStudents() {
    {
      return this.studentsService.getAllStudents();
    }
  }

  @Get(':id')
  getStudentById(@Param('id') id: string) 
  {
    return this.studentsService.getStudentById(Number(id));
  }

  @Post()
  createStudent(@Body() student: { name: string; age: number })
  {
    return this.studentsService.createStudent(student)
    
  }

  @Put(':id')
  updateStudent(@Param('id') id: string, @Body() student: { name: string; age: number })
  {
    return this.studentsService.updateStudent(Number(id), student);
  }

  @Patch(':id')
  patchStudent(@Param('id') id: string, @Body() student: { name?: string; age?: number })
  {
    return this.studentsService.patchStudent(Number(id), student);
  }

  @Delete(':id')
  deleteStudent(@Param('id') id: string)
  {
    return this.studentsService.deleteStudent(Number(id));
  }

}
