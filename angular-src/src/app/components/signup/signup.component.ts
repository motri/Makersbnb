import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service'
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name: String;
  email: String;
  password: String;

  constructor(private validateService: ValidateService, private flashMessage:FlashMessagesService) { }

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
  }
}
