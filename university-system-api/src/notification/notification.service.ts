import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { EnrollmentService } from 'src/enrollment/enrollment.service';

@Injectable()
export class NotificationService
{
    constructor(@Inject(forwardRef(() => EnrollmentService))
    private enrollmentService: EnrollmentService){}

    sendNotification(not: {studentName: string; message: string})
    {

        // check exist or not
        //const enroled = this.checkEnrollmentAndNotify(not);
        // const exits = enroled.find((obj) => obj.studentName === student.studentName &&
        //                                     obj.courseId === student.courseId);

        return not;
    }


    checkEnrollmentAndNotify(student :{ studentName: string; courseId: number})
    {
        const enrollments = this.enrollmentService.getEnrollments();

        return enrollments;
    }
}
