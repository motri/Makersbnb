import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';

import {AuthService} from '../../services/auth.service';
import {ValidateService} from '../../services/validate.service';

const appRoutes: Routes = [
  {path:'', component: NavbarComponent}]

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [
        RouterModule.forRoot(appRoutes),
        FlashMessagesModule,
        HttpModule,
      ],
      providers: [
        ValidateService,
        AuthService,
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should contain Makers BnB brand icon', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.navbar-brand').textContent).toContain('Makers BnB');
  }));

  it('should contain a Home button', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.navbar-left').textContent).toContain('Home');
  }));



});
