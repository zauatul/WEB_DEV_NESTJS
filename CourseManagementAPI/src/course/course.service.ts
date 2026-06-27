import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class CourseService 
{
    private courses: any[] = [
        { id: 1, name: 'Mathematics', description: 'Learn about numbers and equations.' },
        { id: 2, name: 'Physics', description: 'Explore the laws of nature and the universe.' },
        { id: 3, name: 'Chemistry', description: 'Study the composition, structure, and properties of matter.' },
        { id: 4, name: 'Biology', description: 'Understand living organisms and their interactions.' },
        { id: 5, name: 'Computer Science', description: 'Learn about algorithms, programming, and data structures.' }
    ];

    getAllCourses()
    {
        //return this.courses;
        return {message: `Get All Courses - from Service ${this.courses}`, data: this.courses};
    }

    getCourseById(id: number)
    {
        const cr = this.courses.find((c) => c.id === id);

        if(cr)
        {
            return {message: `Get Course with ID: ${id} - from Service`, data: this.courses};
        }
        throw new NotFoundException(` Course with ID: ${id} not found`)
    }

    createCourse(createCoursesDto : CreateCourseDto)
    {
        const id = this.courses.length + 1;
        const newCourse = {id, ...createCoursesDto};
        this.courses.push(newCourse);
        return {message: `Course created successfully`, data: newCourse};

    }

    updateCourse(id: number,createCoursesDto : CreateCourseDto)
    {
        const index = this.courses.findIndex((cr) => id === cr.id);
        this.courses[index] = {...this.courses[index], ...createCoursesDto};
        return {message: `Course updated successfully`, data: this.courses[index]};
    }

    patchCourse(id:number, createCoursesDto : CreateCourseDto)
    {
        const index = this.courses.findIndex((cr) => id === cr.id);
        this.courses[index] = {...this.courses[index], ...createCoursesDto};
        return {message: `Course patches successfully`,id: id,
             updatedFields: this.courses[index]};
    }

    deleteCourse(id:number)
    {
        const index = this.courses.findIndex((cr) => cr.id === id);
        if(index === -1)
        {
            throw new NotFoundException(`Student with id ${id} not found`);
        }
        this.courses.splice(index,1);
        return { message: "Course deleted successfully", id: id }
    }
}