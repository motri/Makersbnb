import { TestBed, async } from '@angular/core/testing';
import { AppModule } from './app.module'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FlashMessagesModule } from 'angular2-flash-messages';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'signup', component: SignupComponent},
  {path:'signin', component: SigninComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'profile', component: ProfileComponent}
]



describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        SigninComponent,
        SignupComponent,
        HomeComponent,
        DashboardComponent,
        ProfileComponent
      ],
      imports: [
        RouterModule.forRoot(appRoutes),
        FormsModule,
        BrowserModule,
        FlashMessagesModule,
        HttpModule
      ],
      providers: [
        AuthService,
        ValidateService,
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have title 'MAKERS BnB'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toContain('MAKERS BnB');
  }));

});
