import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.scss']
})
export class NavigationbarComponent implements OnInit{
@Output() testing = new EventEmitter<boolean>()

  test = false
  constructor(private router:Router) {
  }

  ngOnInit(): void {
  }

  // const navVisible: false;

  navTo(path:string) {
    this.router.navigate([path])

  }


  toggle(){
    this.test = !this.test
    this.testing.next(this.test)
  }
}
