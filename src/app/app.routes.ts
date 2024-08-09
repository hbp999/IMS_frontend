import { Routes } from '@angular/router';
import { ImsComponent } from './components/Ims/Ims.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';
import { BarChartComponent } from './bar-chart/bar-chart.component';


export const routes: Routes = [{ path: 'Items',title:"Item", component: ImsComponent, canActivate: [AuthGuard] },{ path: '',title:"Dashboard", component: DashboardComponent,canActivate: [AuthGuard] },
    { path: 'Contact',title:"Contact Us", component: ContactComponent,canActivate: [AuthGuard] },{ path: 'Register',title:"User Register", component: RegisterComponent },
    { path: 'Login',title:"User Login", component: LoginComponent },{ path: 'BarChart',title:"Chart", component: BarChartComponent , canActivate: [AuthGuard] }];
