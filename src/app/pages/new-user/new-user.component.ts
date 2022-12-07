import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';
import {HttpService} from "../../services/http.service";

import { NewUser } from 'src/app/interface/newUser';
import { AuthResponse } from 'src/app/models/AuthResponse.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit{
  constructor(private http: HttpService) {}

  @ViewChild("form") ngForm:NgForm

  name?:string
  email?:string
  role?:string
  errorText?:string


  ngOnInit() {

  }

  onSubmit() {
    const newUser: NewUser = {
      "email": this.ngForm.value.email,
      "name": this.ngForm.value.name,
      "role": this.ngForm.value.role
    }
    if (!newUser['email'] || !newUser['name'] || !newUser['role']) return

    this.http.sendData<AuthResponse>("api/auth/register", newUser).subscribe((response) => {
      this.errorText = response.message
    }, err => {
      if (err.error.error == "Unauthorized") {
        this.errorText = "U heeft geen bevoegdheid voor deze bewerking."
      }
    })

  }
}
