import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from "@angular/router";
import {JwtToken} from "../../models/jwtToken.model";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.scss']
})
export class NavigationbarComponent implements OnInit{
@Input() visible = false
  activeRoute:string

  panelOpenState = false;
  constructor(private router:Router) {
  }

  ngOnInit(): void {
    this.activeRoute = "/home"
    this.router.events.subscribe((url) => {
      if (url instanceof NavigationEnd) this.activeRoute = url["url"]
    })
  }

  navTo(path:string) {
    this.router.navigate([path])
  }
}
