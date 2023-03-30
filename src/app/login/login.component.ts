import { Component } from '@angular/core';
import { CheckboxControlValueAccessor, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user_name: FormControl = new FormControl('', Validators.required);
  password: FormControl = new FormControl('', Validators.required)

  loginGroup: FormGroup = new FormGroup({
    user_name: this.user_name,
    password: this.password
  })
}
