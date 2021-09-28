import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  pageTitle = 'Login';
  userName!: FormControl;
  password!: FormControl;
  mouseoverLogin!: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  // tslint:disable-next-line: typedef
  login(formValues: any) {
    // console.log(formValues)
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['welcome']);
  }

  // tslint:disable-next-line: typedef
  cancelBtn() {
    this.router.navigate(['welcome']);
  }

  ngOnInit(): void {
    this.userName = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
  }

}
