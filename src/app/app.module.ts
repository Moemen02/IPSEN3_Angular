import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

/*
  Imports for components
 */
import { AppComponent } from './app.component';
import { NavigationbarComponent } from './components/navigationbar/navigationbar.component';


/*
  Imports for pages
 */
import { WastePageComponent } from './pages/waste-page/waste-page.component';
import { HomeComponent } from './pages/home/home.component';


/*
  Imports for material design
 */
import {MatCardModule} from "@angular/material/card";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { AuthService } from './auth.service';
import {MatTableModule} from "@angular/material/table";
import { WasteTableComponent } from './pages/waste-page/waste-components/waste-table/waste-table.component';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from "@angular/material/grid-list";
import { WasteAddComponent } from './pages/waste-page/waste-components/waste-add/waste-add.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    HomeComponent,
    WastePageComponent,
    WasteTableComponent,
    LoginComponent,
    WasteAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
    MatGridListModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
