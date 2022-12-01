import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'AfvalSorteerSysteem';
  visible = false

  name = ""

  constructor(public auth: AuthService) {}

  ngOnInit() {
    const token = localStorage.getItem("auth_key")
    if (token) this.name = this.auth.decodeJWTToken(token).name
  }

  toggle(){
    this.visible = !this.visible
  }
}
