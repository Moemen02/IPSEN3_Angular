import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = ""
  password = ""

  errorText = ""

  isEmailValid = true
  isPassValid = true
  

  constructor(private authService: AuthService, private router: Router) {
    this.authService.isLoggedIn.subscribe((loggedIn:boolean) => {
      if (loggedIn) router.navigate(["/home"])
    })
  }


  login() {

    if (!this.email) this.isEmailValid = false
    else this.isEmailValid = true
    
    if (!this.password) this.isPassValid = false
    else this.isPassValid = true

    if (this.isEmailValid && this.isEmailValid) {
      this.authService.login(this.email, this.password).then((valid:boolean) => {
        if (!valid) {
          this.errorText = "Ongeldige Inloggegevens"
          this.isPassValid = false
          this.isEmailValid = false
        }
      })
    }
  }
}
