import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './auth.service';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from "./pages/home/home.component";
import { WastePageComponent } from "./pages/waste-page/waste-page.component";
import {OrderComponent} from "./pages/order/order.component";
import { NewUserComponent } from './pages/new-user/new-user.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate:[AuthService] },
  { path: 'afvalstoffen', component: WastePageComponent, canActivate:[AuthService] },
  { path: 'new-user', component: NewUserComponent, canActivate:[AuthService] },

  { path: 'orders', component: OrderComponent, canActivate:[AuthService] },

  { path: '**', redirectTo: "/" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
