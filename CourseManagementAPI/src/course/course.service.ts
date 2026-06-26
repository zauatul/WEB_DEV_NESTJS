import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CourseService 
{
    private courses = [
        { id: 1, name: 'Mathematics', description: 'Learn about numbers and equations.' },
        { id: 2, name: 'Physics', description: 'Explore the laws of nature and the universe.' },
        { id: 3, name: 'Chemistry', description: 'Study the composition, structure, and properties of matter.' },
        { id: 4, name: 'Biology', description: 'Understand living organisms and their interactions.' },
        { id: 5, name: 'Computer Science', description: 'Learn about algorithms, programming, and data structures.' }
    ];

    getAllCourses()
    {
        //return this.courses;
        return `Get All Courses - from Service ${this.courses}`;
    }

    getCourseById(id: number)
    {
        const cr = this.courses.find((c) => c.id === id);

        if(cr)
        {
            return `Get Course with ID: ${id} - from Service`
        }
        throw new NotFoundException(` Course with ID: ${id} not found`)
    }

    createCourse(course: { name: string , description: string})
    {
        const id = this.courses.length + 1;
        const newCourse = {id, ...course};
        this.courses.push(newCourse);
        return `Create a Course from Service`;
    }

    updateCourse(id: number, course: {name: string, description: string})
    {
        const index = this.courses.findIndex((cr) => id === cr.id);
        this.courses[index] = {...this.courses[index], ...course};
        return `Updated Course ID: ${id} - from Service`;
    }

    patchCourse(id:number, course:{name?: string, description?:string})
    {
        const index = this.courses.findIndex((cr) => id === cr.id);
        this.courses[index] = {...this.courses[index], ...course};
        return `Patch Course ID: ${id} - from Service`;
    }

    deleteCourse(id:number)
    {
        const index = this.courses.findIndex((cr) => cr.id === id);
        if(index === -1)
        {
            throw new NotFoundException(`Student with id ${id} not found`);
        }
        this.courses.splice(index,1);
        return `Delete Course ID: ${id} - from Service`;
    }
}