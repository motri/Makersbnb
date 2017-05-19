import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service'
import { AuthService } from '../../services/auth.service'
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name: String;
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

  onSignupSumbit(){
    const user = {
      name: this.name,
      email: this.email,
      password: this.password
    }

    if(!this.validateService.validateSignup(user)){
      this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    this.authService.signupUser(user).subscribe(data => {
      if(data.success){
        this.flashMessage.show('You are now signed up and can sign in', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/signin']);
      } else {
        this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/signup']);
      }
    });
  }
}
