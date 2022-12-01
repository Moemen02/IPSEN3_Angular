import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {JwtToken} from "../../models/jwtToken.model";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.scss']
})
export class NavigationbarComponent implements OnInit{
@Input() visible = false

  constructor(private router:Router) {
  }

  ngOnInit(): void {

  }

  // const navVisible: false;

  navTo(path:string) {
  console.log("this")
    this.router.navigate([path])

  }
}
