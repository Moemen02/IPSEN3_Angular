import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';
import {HttpService} from "../../../../services/http.service";

import { NewUser } from 'src/app/interface/newUser';
import { AuthResponse } from 'src/app/modules/core/models/AuthResponse.model';

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

  success?:boolean


  ngOnInit() {

  }

  onSubmit() {
    const newUser: NewUser = {
      "email": this.ngForm.value.email,
      "name": this.ngForm.value.name,
      "role": this.ngForm.value.role
    }
    if (!newUser['email'] || !newUser['name'] || !newUser['role']) return

    this.http.sendData<AuthResponse>("/api/auth/register", newUser).subscribe((response) => {
      this.success = response.success
      this.errorText = response.message
    }, err => {
      if (err.error.error == "Unauthorized" || err.error.error == "Forbidden") {
        this.errorText = "U heeft geen bevoegdheid voor deze bewerking."
        this.success = false
      }
    })

  }
}
