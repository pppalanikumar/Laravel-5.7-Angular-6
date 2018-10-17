import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string = '';
  public password: string = '';
  public warningMessage: string;

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
    var currentUser = JSON.parse(localStorage.getItem('user'));
    if (currentUser) {
      this.router.navigate(['home']);
    }
  }

  onLogIn() {
    this.authService.login(this.email, this.password)
      .subscribe(res => {
        console.log(res);
      }, error => {
        this.warningMessage = "Invalid Credentials!";
        console.error(error);
      });
  }
}
