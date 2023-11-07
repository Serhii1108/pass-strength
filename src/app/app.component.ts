import { Component } from '@angular/core';
import { Status } from './shared/constance';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public status: Status = "clear";
}
