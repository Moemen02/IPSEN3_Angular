import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {JwtToken} from "../../models/jwtToken.model";
import {AuthService} from "../../../../auth.service";

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.scss']
})
export class NavigationbarComponent implements OnInit{
@Input() visible = false

  panelOpenState = false;

isAdmin = false

  constructor(private router:Router, private auth: AuthService) {
    if (this.auth.decodeJWTToken(this.auth.getToken()).role === "ADMIN") {
      this.isAdmin = true
    } else {
      this.isAdmin = false
    }
  }


  ngOnInit(): void {

  }

  // const navVisible: false;

  navTo(path:string) {
  console.log("this")
    this.router.navigate([path])

  }
}
