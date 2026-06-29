import { forwardRef, Module } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { EnrollmentController } from './enrollment.controller';
import { CourseModule } from 'src/course/course.module';
import { NotificationModule } from 'src/notification/notification.module';

@Module({
  imports: [ 
  CourseModule, 
  forwardRef(() => NotificationModule),  // <-- forwardRef here 
  ], 
  controllers: [EnrollmentController], 
  providers: [EnrollmentService], 
  exports: [EnrollmentService]
})
export class EnrollmentModule {}
