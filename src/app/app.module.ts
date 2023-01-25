import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {LabelModule} from "./modules/label/label.module";
import {AdminModule} from "./modules/admin/admin.module";
import {ArticleModule} from "./modules/article/article.module";
import {ClientModule} from "./modules/client/client.module";
import {LogModule} from "./modules/log/log.module";
import {OrderModule} from "./modules/order/order.module";
import {CoreModule} from "./modules/core/core.module";


/*
  Imports for components
 */
import { AppComponent } from './app.component';
import { NavigationbarComponent } from './modules/core/components/navigationbar/navigationbar.component';


/*
  Imports for pages
 */
import { WastePageComponent } from './modules/article/pages/waste-page/waste-page.component';
import { HomeComponent } from './modules/client/pages/home/home.component';


/*
  Imports for material design
 */
import { MatCardModule } from "@angular/material/card";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './modules/client/pages/login/login.component';
import { AuthService } from './auth.service';
import { MatTableModule } from "@angular/material/table";
import { WasteTableComponent } from './modules/article/components/waste-table/waste-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from "@angular/material/grid-list";
import { WasteAddComponent } from './modules/article/components/waste-add/waste-add.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { NewUserComponent } from './modules/admin/pages/new-user/new-user.component';
import { MatIconModule } from "@angular/material/icon";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";
import { MatTabsModule } from "@angular/material/tabs";
import { OrderComponent } from './modules/order/pages/order/order.component';
import { OrderListComponent } from './modules/order/components/order-list/order-list.component';
import { SingleOrderInfoComponent } from './modules/order/components/single-order-info/single-order-info/single-order-info.component';
import { SingleWasteComponent } from "./modules/article/components/single-waste/single-waste.component";
import { CategoryWasteComponent } from './modules/article/components/category-waste/category-waste.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PagerComponent } from './modules/core/components/pager/pager.component';
import { SingleCompComponent } from './modules/article/components/category-waste/single-comp/single-comp.component';



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
    Ng2SearchPipeModule,
    LabelModule,
    AdminModule,
    ClientModule,
    ArticleModule,
    LogModule,
    OrderModule,
    CoreModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
