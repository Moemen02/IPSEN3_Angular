import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {Article} from "../../models/article.model";
import {ArticleDetailModel} from "../../models/article-detail.model";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {WasteAddComponent} from "./waste-components/waste-add/waste-add.component";

@Component({
  selector: 'app-waste-page',
  templateUrl: './waste-page.component.html',
  styleUrls: ['./waste-page.component.scss']
})

export class WastePageComponent{
  constructor(public dialog: MatDialog) {
  }
  openEdit() {
    const dialogRef = this.dialog.open(WasteAddComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`: ${result}`);
    });
  }
}
