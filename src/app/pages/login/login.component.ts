import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthResponse } from 'src/app/model/AuthResponse.model';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = "iemand2@test.com"
  password = "Medewerker@"

  errorText = ""

  isEmailValid = true
  isPassValid = true

  needNewPassword = false

  isNewPasswordValid = true

  newPassword = ""
  newPassword2 = ""


  constructor(private authService: AuthService, private router: Router) {
    this.authService.isLoggedIn.subscribe((loggedIn: boolean) => {
      if (loggedIn) router.navigate(["/home"])
    })

    this.authService.changePassword.subscribe((state: boolean) => {
      if (state) {
        this.needNewPassword = true;
        this.errorText = ""
      }
    })
  }

  login() {

    if (!this.email) this.isEmailValid = false
    else this.isEmailValid = true

    if (!this.password) this.isPassValid = false
    else this.isPassValid = true

    if (this.isEmailValid && this.isEmailValid) {
      this.authService.login(this.email, this.password).subscribe((valid: AuthResponse) => {
        this.errorText = valid.message
      })
    }
  }

  updatePassword() {
    this.isNewPasswordValid = true


    if (this.newPassword !== this.newPassword2) {
      this.errorText = "Wachtwoorden komen niet overeen"
      this.isNewPasswordValid = false
      return
    }

    if (this.newPassword.length < 7) {
      this.errorText = "Wachtwoord moet langer zijn dan 6 characters"
      this.isNewPasswordValid = false
      return
    }

    if (!this.newPassword.match(/[A-Z]/g)) {
      this.errorText = "Wachtwoord moet een hoofdletter bevatten"
      this.isNewPasswordValid = false
      return
    }

    

    if (this.isNewPasswordValid) {
      this.errorText = ""
      this.needNewPassword = false
      // this.authService.
    }
  }
}


// iemand2@test.com
// Medewerker@

// admin@admin.com
// adminn