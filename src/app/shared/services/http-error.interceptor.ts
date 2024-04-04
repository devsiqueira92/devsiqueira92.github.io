import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { NotificationService } from './notification.service';
// import { ConfigService } from './config.service';
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private notificationService: NotificationService) {} // private configService: ConfigService // private notificationService: NotificationService,
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((evt) => {
        if (evt instanceof HttpResponse) {
          if (evt.ok) {
            let content;
            // console.log(evt);
            switch (evt.status) {
              case 204:
                content = 'The information was updated successfully';
                this.notificationService.success(content, 'Success');
                break;

              case 201:
                content = 'The information was created successfully';
                this.notificationService.success(content, 'Success');
                break;

              default:
                break;
            }
          }
        }
      }),
      catchError((err: any) => {
        // hardcoded exception for which no alerts should be displayed. Move to authService when possible
        // if (req.url.includes('/users/authentication/token')) {
        //   return throwError(err);
        // }
        // end of hardcoded block
        if (err instanceof HttpErrorResponse) {
          console.log(err);
          try {
            this.notificationService.error(err);
          } catch (e) {
            this.notificationService.error('An error occurred');
          }
        }
        return throwError(err);
      })
    );
  }
}
