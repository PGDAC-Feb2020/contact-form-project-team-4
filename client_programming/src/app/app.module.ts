import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomePageComponent } from './home-page/home-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';

import { RecordOperationsComponent } from './record-operations/record-operations.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LogOutComponent } from './log-out/log-out.component';

import { ErrorPageComponent } from './error-page/error-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { ShowRecordComponent } from './show-record/show-record.component';
import { UpdateRecordComponent } from './update-record/update-record.component';
import { DeleteRecordComponent } from './delete-record/delete-record.component';

@NgModule({
  declarations: [
    AppComponent,
    
    HomePageComponent,
    LogInComponent,
    RegisterComponent,
    
    RecordOperationsComponent,
    AboutUsComponent,
    ContactUsComponent,
    LogOutComponent,
    
    ErrorPageComponent,
    ForgotPasswordComponent,

    ShowRecordComponent,
    UpdateRecordComponent,
    DeleteRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
