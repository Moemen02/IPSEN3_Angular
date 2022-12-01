import {Component, EventEmitter, Input, Output} from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AfvalSorteerSysteem';
  visible = false

  constructor(public auth: AuthService) {}

  toggle(){
    this.visible = !this.visible
  }
}
