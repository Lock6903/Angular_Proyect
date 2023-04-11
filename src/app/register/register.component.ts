import { Component } from '@angular/core';
import { CheckboxControlValueAccessor, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/collections';
import { UserService } from '../services/routing.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userUid: FormControl = new FormControl('', Validators.required);
  user_name: FormControl = new FormControl('', Validators.required);
  user_lastName: FormControl = new FormControl('', Validators.required);
  user_lastName2: FormControl = new FormControl('', Validators.required);
  user_email: FormControl = new FormControl('', Validators.required);
  user_password: FormControl = new FormControl('', Validators.required)

  constructor(private http: UserService) { }
  registerGroup: FormGroup = new FormGroup({
    userUid: this.userUid,
    user_name: this.user_name,
    user_lastName: this.user_lastName,
    user_lastName2: this.user_lastName2,
    user_email: this.user_email,
    user_password: this.user_password
  });

  ngOnInit(): void {

  }
  onSubmit(data: User) {
    this.http.addUser(data).subscribe(data => console.log("data: " + data));


  }

}
