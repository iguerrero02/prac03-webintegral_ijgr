import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseForm } from '../../../shared/utils/base-form';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required,Validators.minLength(3)]],
  });

  constructor(private fb: FormBuilder, public baseForm: BaseForm, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(){
this.router.navigate(['/home'])
  }

}
