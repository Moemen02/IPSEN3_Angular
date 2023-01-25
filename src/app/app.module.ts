import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


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
import { MatCardModule } from "@angular/material/card";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { AuthService } from './auth.service';
import { MatTableModule } from "@angular/material/table";
import { WasteTableComponent } from './pages/waste-page/waste-components/waste-table/waste-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from "@angular/material/grid-list";
import { WasteAddComponent } from './pages/waste-page/waste-components/waste-add/waste-add.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { NewUserComponent } from './pages/new-user/new-user.component';
import { MatIconModule } from "@angular/material/icon";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";
import { MatTabsModule } from "@angular/material/tabs";
import { OrderComponent } from './pages/order/order.component';
import { OrderListComponent } from './pages/order/order-list/order-list.component';
import { SingleOrderInfoComponent } from './pages/order/order-list/single-order-info/single-order-info/single-order-info.component';
import { SingleWasteComponent } from "./pages/waste-page/waste-components/single-waste/single-waste.component";
import { CategoryWasteComponent } from './pages/waste-page/waste-components/category-waste/category-waste.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PagerComponent } from './components/pager/pager.component';
import { SingleCompComponent } from './pages/waste-page/waste-components/category-waste/single-comp/single-comp.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    HomeComponent,
    WastePageComponent,
    WasteTableComponent,
    LoginComponent,
    WasteAddComponent,
    NewUserComponent,
    SingleWasteComponent,
    NewUserComponent,
    OrderComponent,
    OrderListComponent,
    SingleOrderInfoComponent,
    CategoryWasteComponent,
    PagerComponent,
    SingleCompComponent,

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
    MatPaginatorModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatTabsModule,
    Ng2SearchPipeModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
