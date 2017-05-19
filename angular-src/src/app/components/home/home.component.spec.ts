import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { APP_BASE_HREF } from '@angular/common';

const appRoutes: Routes = [
  {path:'', component: HomeComponent}]

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        RouterModule.forRoot(appRoutes)
      ],
      providers:[
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render h1 title containing MAKERS BnB', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('MAKERS BnB');
  }));

  it('should render paragraph ', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Sulaiman');
  }));

  it('should contain a link to SIGN UP', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#signUpButton').textContent).toContain('SIGN UP')
  }));

  it('should contain a link to SIGN IN', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#signInButton').textContent).toContain('SIGN IN')
  }));

  it('should provide brief description of services', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#serviceIntro').textContent).toContain('List your space')
  }))

});
