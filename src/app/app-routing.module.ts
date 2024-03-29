import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './auth.service';
import { LoginComponent } from './modules/client/pages/login/login.component';
import { HomeComponent } from "./modules/client/pages/home/home.component";
import { WastePageComponent } from "./modules/article/pages/waste-page/waste-page.component";
import {OrderComponent} from "./modules/order/pages/order/order.component";
import { NewUserComponent } from './modules/admin/pages/new-user/new-user.component';
import {LogPageComponent} from "./modules/log/pages/log-page/log-page.component";


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate:[AuthService] },
  { path: 'afvalstoffen', component: WastePageComponent, canActivate:[AuthService] },
  { path: 'new-user', component: NewUserComponent, canActivate:[AuthService] },

  { path: 'orders', component: OrderComponent, canActivate:[AuthService] },
  { path: 'orders/log', component: LogPageComponent, canActivate:[AuthService] },

  { path: '**', redirectTo: "/" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
