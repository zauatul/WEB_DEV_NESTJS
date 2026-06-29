import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CourseService } from 'src/course/course.service';
import { NotificationService } from 'src/notification/notification.service';

@Injectable()
export class EnrollmentService 
{
    constructor(private couseService: CourseService,
         @Inject(forwardRef(() => NotificationService))
        private readonly notificationService: NotificationService
    ){}

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
        
        if(course)
        {
            const st = {
            id: this.students.length + 1,
            ...student
            }
            this.students.push(st);


            const notification =this.notificationService.sendNotification({studentName:student.studentName,
                message:'Enrollment Successful' });

            return {notification: notification, enrollment: st}
        }
        throw new NotFoundException();

    }
}
