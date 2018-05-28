import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  
  form: FormGroup;

  constructor(fb: FormBuilder){
    this.form = fb.group({
      oldPassword: ['',
       Validators.required,
      PasswordValidators.validOldPassword
      ],
      newPassword: ['', Validators.required,
      PasswordValidators.validOldPassword
      ],
      confirmPassword: ['', Validators.required,    
      PasswordValidators.validOldPassword
      ]
    })
  }

  get oldPassword() { return this.form.get('oldPassword');}
  get newPassword() { return this.form.get('newPassword');}
  get confirmPassword() { return this.form.get('confirmPassword');}
}
