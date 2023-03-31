import { Component } from '@angular/core';
import { CheckboxControlValueAccessor, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../services/routing.service';
import { User } from '../models/collections';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userUid: FormControl = new FormControl('', Validators.required);
  password: FormControl = new FormControl('', Validators.required)
  userExists: boolean = false;
  loginGroup: FormGroup = new FormGroup({
    userUid: this.userUid,
    password: this.password
  })
  constructor(private http: UserService, private router: Router) { }
  login() {
    this.http.getUsers().subscribe((users: User[]) => {
      const user = users.find(user => user.userUid === this.userUid.value);
      if (user && user.user_password === this.password.value) {
        // El usuario existe y la contraseña es correcta
        this.router.navigate(['/home']);
      } else {
        // El usuario no existe o la contraseña es incorrecta
        alert('Username o password incorrectos');
      }
    });
  }
}
