import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm !: FormGroup

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router: Router) { }

  ngOnInit():void {
    this.loginForm = this.formBuilder.group({
      username:[''],
      password:[''],
      token:[''],
    })
  }

  login(){

    this.http.get<any>("http://localhost:3000/loginDetails")
    .subscribe(res=>{

      const user = res.find((a:any) => {

        return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password;

      });
      
      if(user){

        res.find((a:any) => {

          localStorage.setItem('token', a.token);
          localStorage.setItem('username', JSON.stringify(a.username));
  
        });
  

        alert("Logged In Succesfully");
        this.loginForm.reset();
        this.router.navigate(['tab1']);

      }else{

        alert('User not found');

      }

    },err=>{

      alert("Something went wrong!");
      
    })

  }

}
