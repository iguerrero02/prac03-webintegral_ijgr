import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseForm } from '../../../shared/utils/base-form';
import { Router } from '@angular/router';
import {ReCaptchaV3Service} from 'ng-recaptcha';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  tokenVisible: boolean = true;
  reCAPTCHAToken: string ="";

  //loginForm = this.fb.group({
    // username: ['', [Validators.required]],
    // password: ['', [Validators.required,Validators.minLength(3)]],
 // });

  constructor(private fb: FormBuilder, public baseForm: BaseForm, private router: Router, private reCaptchaV3Service: ReCaptchaV3Service) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required,Validators.minLength(3)]],
 });
  }

  onLogin(){
this.reCaptchaV3Service.execute('importantAction').subscribe((token: string)=> {
  this.tokenVisible = true;
  this.reCAPTCHAToken = `Token [${token}] generated`;
  
});


// this.router.navigate(['/home'])
  }

}
