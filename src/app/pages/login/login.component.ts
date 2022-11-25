import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) {
    this.authService.isLoggedIn.subscribe((loggedIn:boolean) => {
      if (loggedIn) router.navigate(["/home"])
    })
  }


  login() {
    this.authService.login("admin", "admin")
  }
}
