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
import {MatTableModule} from "@angular/material/table";
import { WasteTableComponent } from './pages/waste-page/waste-components/waste-table/waste-table.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    HomeComponent,
    WastePageComponent,
    WasteTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
