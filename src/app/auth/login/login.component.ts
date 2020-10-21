import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NovitaService } from 'src/app/services/novita.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private novitaservice:NovitaService, private router:Router) { }
  submitted = false;
  loginData = {
    username:'',
    password:''
  }
  ngOnInit(): void {
  }

  login(): void {
    const data = {
      username: this.loginData.username,
      password: this.loginData.password
    };

    this.novitaservice.login(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          sessionStorage.setItem('loggedUser', data.username);
          this.router.navigateByUrl('/');
        },
        error => {
          console.log(error);
        });
  }

}
