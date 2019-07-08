import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent} from './register/register.component';


const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'app-login', component: LoginComponent },
  { path: 'app-register', component: RegisterComponent},
  { path: '**', component: AppComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
