import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateListing(listing){
    if(listing.name == undefined ){
      return false;
    } else {
      return true;
    }
  }

  validateSignup(user){
    if(user.name == undefined || user.email == undefined || user.password == undefined){
      return false;
    } else {
      return true;
    }
  }

  validateSignin(user){
    if(user.email == undefined || user.password == undefined){
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
