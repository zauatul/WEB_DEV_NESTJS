import { Body, Controller, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}


  @Post("send")
  sendNotification(@Body() obj: {studentName: string; message: string})
  {
    return this.notificationService.sendNotification(obj);
  }

  @Post("check")
  checkEnrollmentAndNotify(@Body() obj: {studentName: string; courseId: number})
  {
    return this.notificationService.checkEnrollmentAndNotify(obj);
  }
}
