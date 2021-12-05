import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router: Router) { }

  IsLoggedIn(){
    return !!localStorage.getItem('token');
  }
  
}
