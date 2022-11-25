import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {WastePageComponent} from "./pages/waste-page/waste-page.component";


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'afvalstoffen', component: WastePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
