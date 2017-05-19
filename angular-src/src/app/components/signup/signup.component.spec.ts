import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { SignupComponent } from './signup.component';
import { FlashMessagesModule } from 'angular2-flash-messages';

import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';

const appRoutes: Routes = [
  {path:'signup', component: SignupComponent},
]

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports: [
        FormsModule,
        FlashMessagesModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
      ],
      providers: [
        ValidateService,
        AuthService,
        { provide: APP_BASE_HREF, useValue: '/signup' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
