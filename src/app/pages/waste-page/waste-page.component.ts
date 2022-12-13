import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {ArticleDetailModel} from "../../models/article-detail.model";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {WasteAddComponent} from "./waste-components/waste-add/waste-add.component";
import { Waste } from "../../models/waste.model";

@Component({
  selector: 'app-waste-page',
  templateUrl: './waste-page.component.html',
  styleUrls: ['./waste-page.component.scss']
})

export class WastePageComponent{
  private article!: Waste;
  constructor(public dialog: MatDialog) {
  }
  openAddArticle() {
    const dialogRef = this.dialog.open(WasteAddComponent, {
      width: '750px',
      data: {
        article: this.article
      },
      disableClose: true
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed: ' + result);
      this.article = result;
    });
  }
}
