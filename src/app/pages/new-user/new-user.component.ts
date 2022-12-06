import { Component, OnInit } from '@angular/core';

import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import { MyErrorStateMatcher } from 'src/utils/MyErrorState';



@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit{
  
  formGroup = new FormGroup({
    email:new FormControl('', [Validators.required, Validators.email]),
    name:new FormControl('', [Validators.required]),
    role:new FormControl('', [Validators.required])
  })

  matcher = new MyErrorStateMatcher();

  ngOnInit() {

  
  }
}
