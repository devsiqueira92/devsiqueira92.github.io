import { HttpClient, HttpRequest } from '@angular/common/http';
import { Component } from '@angular/core';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { Subscription, of } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';

const getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });


@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [NzUploadModule, NzModalModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent {  constructor(private msg: NzMessageService) {}

handleChange({ file, fileList }: NzUploadChangeParam): void {
  const status = file.status;
  if (status !== 'uploading') {
    console.log(file, fileList);
  }
  if (status === 'done') {
    this.msg.success(`${file.name} file uploaded successfully.`);
  } else if (status === 'error') {
    this.msg.error(`${file.name} file upload failed.`);
  }
}
}
