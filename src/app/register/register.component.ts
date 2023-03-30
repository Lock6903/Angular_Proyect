import { Component } from '@angular/core';
import { CheckboxControlValueAccessor, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 user_name:FormControl = new FormControl ('', Validators.required);
 user_lastName:FormControl = new FormControl ('',Validators.required);
 user_lastName2:FormControl = new FormControl ('', Validators.required);
 user_email:FormControl = new FormControl ('', Validators.required);
 password:FormControl = new FormControl ('', Validators.required)

 registerGroup:FormGroup = new FormGroup({
    user_name:this.user_name,
    user_lastName:this.user_lastName,
    user_lastName2:this.user_lastName2,
    user_email:this.user_email,
    password:this.password
 });

 loginGroup: FormGroup = new FormGroup({
  user_name:this.user_name,
  password:this.password
 })
}
