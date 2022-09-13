import { YogaComponent } from './components/yoga/yoga.component';
import { MassagesComponent } from './components/massages/massages.component';
import { ContainerComponent } from './components/container/container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsideComponent } from './components/aside/aside.component';
import { AsideLeftComponent } from './components/aside-left/aside-left.component';
import { RouterModule, Routes, ROUTES } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppModule } from './app.module';
import { AboutComponent } from './components/about/about.component';
import { TarifsComponent } from './components/tarifs/tarifs.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
// import { LogoutComponent } from './components/auth/logout;
import { InscriptionComponent } from './components/inscription/inscription.component';


export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'Main', component: MainComponent, pathMatch: 'full' },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'containers', component: ContainerComponent },
  { path: 'aside', component: AsideComponent },
  { path: 'aside-left', component: AsideLeftComponent },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'navbar', component: NavbarComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'tarifs', component: TarifsComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, pathMatch: 'full' },
  { path: 'massages', component: MassagesComponent, pathMatch: 'full' },
  { path: 'yoga', component: YogaComponent, pathMatch: 'full' },
  { path: 'inscription', component:InscriptionComponent, pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];
@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class AppRoutingModule {}
