import { Injectable, TemplateRef } from '@angular/core';
import {
  NzNotificationDataOptions,
  NzNotificationRef,
  NzNotificationService,
} from 'ng-zorro-antd/notification';
import { getErrorMessage } from '../helpers/http.helper';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private nzNotificationService: NzNotificationService) {}

  error(
    error: any,
    options: NzNotificationDataOptions = {}
  ): NzNotificationRef {
    const errorMessage = getErrorMessage(error);
    return this.nzNotificationService.create(
      'error',
      errorMessage.title,
      errorMessage.content,
      options
    );
  }
  success(
    content: string,
    title = 'Success',
    options: NzNotificationDataOptions = {}
  ): NzNotificationRef {
    return this.nzNotificationService.create(
      'success',
      title,
      content,
      options
    );
  }

  warning(
    content: string,
    title = 'Warning',
    options: NzNotificationDataOptions = {}
  ): NzNotificationRef {
    return this.nzNotificationService.create(
      'warning',
      title,
      content,
      options
    );
  }

  template(
    template: TemplateRef<{}>,
    options: NzNotificationDataOptions = {}
  ): NzNotificationRef {
    return this.nzNotificationService.template(template, options);
  }
}
