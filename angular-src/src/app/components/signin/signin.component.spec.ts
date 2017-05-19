import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { SigninComponent } from './signin.component';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';

const appRoutes: Routes = [
  {path:'signin', component: SigninComponent}
]


describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SigninComponent
       ],
      imports: [
        RouterModule.forRoot(appRoutes),
        FormsModule,
        FlashMessagesModule,
        HttpModule
      ],
      providers: [
        AuthService,
        ValidateService,
        { provide: APP_BASE_HREF, useValue: '/signin' }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });




});
