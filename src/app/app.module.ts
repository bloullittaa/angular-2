import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { AsideComponent } from './components/aside/aside.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContainerComponent } from './components/container/container.component';
import { AsideLeftComponent } from './components/aside-left/aside-left.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, ROUTES } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import {routes} from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { MassagesComponent } from './components/massages/massages.component';
import { YogaComponent } from './components/yoga/yoga.component';
import { TarifsComponent } from './components/tarifs/tarifs.component';
import { ContactComponent } from './components/contact/contact.component';
import { InscriptionComponent } from './components/inscription/inscription.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AsideComponent,
    ContainerComponent,
    AsideLeftComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    MassagesComponent,
    YogaComponent,
    TarifsComponent,
    ContactComponent,
    InscriptionComponent,
  ],
  exports: [],
  imports: [BrowserModule, CommonModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

