import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private _formBuilder: FormBuilder,
    private _Router: Router,
    private spinner: NgxSpinnerService
  ) {}

  loginForm: FormGroup = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(30)],
    ],
  });

  username: string = '';

  inputType: string = 'password';

  showPassword(): void {
    if (this.inputType === 'password') {
      this.inputType = 'text';
    } else {
      this.inputType = 'password';
    }
  }

  login(form: FormGroup): void {
    this.spinner.show();

    if (form.valid) {
      setTimeout(() => {
        this.spinner.hide();
        this._Router.navigate(['/mainwheels/dashboard']);
      }, 1000);
    } else {
      console.log(form.controls);
      console.log(form.getRawValue());
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
    }
  }
}
