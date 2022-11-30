import {Component, Input} from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AfvalSorteerSysteem';
  woow = false

  constructor(public auth: AuthService) {}

  booleanTest(bool: boolean) {
    this.woow = bool
  }
}
