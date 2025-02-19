import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-file-upload';
  public uploader:FileUploader = new FileUploader({url:'http://192.168.1.40:3001/upload'});
}
