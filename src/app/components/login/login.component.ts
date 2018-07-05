import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { BlogsService } from '../../services/blogs.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  private conn: Subscription;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.initForm();
    // this.authService.login();
  }


  private initForm() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.minLength(1)]),
      'password': new FormControl(null, Validators.compose([Validators.required, Validators.minLength(1)]))
    });

  }

  onSubmitForm(){
    let email = this.loginForm.controls['email'].value;
    let password =  this.loginForm.controls['password'].value;
    console.log(email, password)
    this.authService.login(email, password)
    .subscribe(data=>console.log(data));
  }
}
