import { Injectable } from '@nestjs/common';
import { CourseService } from 'src/course/course.service';

@Injectable()
export class EnrollmentService 
{
    constructor(private couseService: CourseService){}

    private students : any[] = [
        {id: 1, studentName: "Nahid", courseId: 2}
    ];

    getEnrollments()
    {
        return { message: 'All enrollments fetched', data: this.students };
    }

    enrollStudent(student: {studentName: string; courseId: string})
    {
        const course = this.couseService.getCourseById(Number(student.courseId))
        const st = {
            id: this.students.length + 1,
            ...student
        }
        this.students.push(st);

        return { message: 'Student enrolled successfully', 
                student: student.studentName, 
                course: course }

    }
}
