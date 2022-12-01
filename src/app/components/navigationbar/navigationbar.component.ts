import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.scss']
})
export class NavigationbarComponent implements OnInit{
@Output() showNav = new EventEmitter<boolean>()

  visible = false
  constructor(private router:Router) {
  }

  ngOnInit(): void {
  }

  // const navVisible: false;

  navTo(path:string) {
  console.log("this")
    this.router.navigate([path])

  }


  toggle(){
    this.visible = !this.visible
    this.showNav.next(this.visible)
  }
}
