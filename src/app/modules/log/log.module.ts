import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleLogInfoComponent } from './components/single-log-info/single-log-info.component';
import { LogListComponent } from './components/log-list/log-list.component';
import { LogPageComponent } from './pages/log-page/log-page.component';
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";



@NgModule({
  declarations: [
    SingleLogInfoComponent,
    LogListComponent,
    LogPageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule
  ]
})
export class LogModule { }
