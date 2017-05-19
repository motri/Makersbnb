import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newlisting',
  templateUrl: './newlisting.component.html',
  styleUrls: ['./newlisting.component.css']
})
export class NewlistingComponent implements OnInit {
  name: String;
  address: String;
  description: String;
  price: Number;
  listedBy: String;

  constructor(
    private router: Router,
    private flashMessage:FlashMessagesService,
    private validateService: ValidateService,
    private authService:AuthService
  ) { }

  ngOnInit() {
  }

onAddListingSubmit(){
  var userId = JSON.parse(localStorage.user).id;

  const listing = {
    name: this.name,
    address: this.address,
    description: this.description,
    price: this.price,
    listedBy: userId
  }

  if(!this.validateService.validateListing(listing)){
    this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
    return false;
  }

  this.authService.storeListing(listing).subscribe(data => {
    if(data.success){
      this.flashMessage.show('Your listing has been added!', { cssClass: 'alert-success', timeout: 3000 });
      this.router.navigate(['/']);
    } else {
      this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
      this.router.navigate(['/new-listing']);
    }
  });
 }
}
