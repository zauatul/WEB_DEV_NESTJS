import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService 
{
    private courses : any [] = [
        { id: 1, name: 'Mathematics', code: 'MAT101' },
        { id: 2, name: 'Physics', code: 'PHY121' },
        { id: 3, name: 'Chemistry', code: 'CHE333' },
        { id: 4, name: 'Biology', code: 'BOI455' },
        { id: 5, name: 'Computer Science', code: 'CS204' }
    ]

    getAllCourses()
    {
        return{
            message : "All courses fetched",
            data: this.courses
        }
    }

    getCourseById(id: number)
    {
        const course = this.courses.find((cr)=> id === cr.id);

        return{
            message:"Course Fetched",
            data: course
        }
    }

    createCourse(course: {name: string, code: string})
    {
        const newCourse = {
            id : this.courses.length + 1,
            ...course
        }
        this.courses.push(newCourse);

        return{
            message:"Course created",
            data: newCourse
        }
    }
}
