import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userRegisterForm: FormGroup;
  constructor() {
    this.userRegisterForm = new FormGroup({
      name: new FormControl(null,[Validators.required,Validators.pattern("[a-zA-Z]{3,}")]),
      email: new FormControl(null,[Validators.required, Validators.email]),
      password: new FormControl(),
      address: new FormGroup({
        city: new FormControl(),
        strNum: new FormControl(),
      }),
      phones:new FormArray([new FormControl(),]),
    });
  }
  get getName()
  {
    return this.userRegisterForm.get("name");
  }
  get getEmail()
  {
    return this.userRegisterForm.get("email");
  }
  get phoneArray()
  {
    return this.userRegisterForm.get("phones") as FormArray;
  }
  addPhoneField()
  {
    this.phoneArray.push(new FormControl());
  }
  removePhoneField(index:number)
  {
    this.phoneArray.removeAt(index);
  }
}
