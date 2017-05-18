import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service'
import { AuthService } from '../../services/auth.service'
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email: String;
  password: String;

  constructor(
    private validateService: ValidateService,
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSigninSubmit(){
    const user = {
      email: this.email,
      password: this.password
    }

    if(!this.validateService.validateSignin(user)){
      this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success){
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.show('Welcome ' + data.user.name + ' you can now list your space!', { cssClass: 'alert-success', timeout: 10000 });
        this.router.navigate(['/']);
      } else {
        this.flashMessage.show('Password or Email Wrong', { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/signin']);
      }
    });
  }
}
