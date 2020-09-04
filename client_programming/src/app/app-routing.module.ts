import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

import { from } from 'rxjs';

const routes: Routes = [

  { path: 'log-in', component: LogInComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'home-page', component: HomePageComponent,
    children: [
      { path: 'record-operations', component: RecordOperationsComponent,
      children: [
        { path: 'show-record', component: ShowRecordComponent },
        { path: 'update-record', component: UpdateRecordComponent },
        { path: 'delete-record', component: DeleteRecordComponent }

      ]  
      },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'log-out', component: LogOutComponent }
    ]
  },
  { path: '', redirectTo: '/log-in', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
function newFunction(): string {
  return 'show-record';
}

