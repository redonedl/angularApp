import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddskilsComponent } from './components/addskils/addskils.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MyskillComponent } from './components/myskill/myskill.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TshirtComponent } from './components/tshirt/tshirt.component';
import { DetailsComponent } from './components/details/details.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';

const routes:Routes = [
  { path: '', redirectTo:'home', pathMatch:'full' },
  { path: 'home', component:HomeComponent },
  { path: 'addskill', component:AddskilsComponent },
  { path: 'login', component:LoginComponent },
  { path: 'register', component:RegisterComponent },
  { path: 'myskill', component:MyskillComponent },
  { path: 'skills', component:SkillsComponent },
  { path: 'details/:id', component:DetailsComponent },
  { path: 'userprofile', component:UserprofileComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddskilsComponent,
    LoginComponent,
    RegisterComponent,
    MyskillComponent,
    SkillsComponent,
    TshirtComponent,
    DetailsComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
