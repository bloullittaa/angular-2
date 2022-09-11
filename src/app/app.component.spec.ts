import { RouterModule } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LoginComponent } from '../app/components/auth/login/login.component';
import { RegisterComponent } from '../app/components/auth/register/register.component';
import {AppRoutingModule} from './app-routing.module'


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'newApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('newApp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('newApp app is running!');
  });
});
