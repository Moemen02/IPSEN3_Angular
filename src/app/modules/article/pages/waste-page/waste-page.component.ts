import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../../../services/http.service";
import {ArticleData} from "../../models/article-data.model";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {WasteAddComponent} from "../../components/waste-add/waste-add.component";
import { Article } from "../../models/article.model";

@Component({
  selector: 'app-waste-page',
  templateUrl: './waste-page.component.html',
  styleUrls: ['./waste-page.component.scss']
})

export class WastePageComponent{
  private article!: Article;
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
      this.article = result;
    });
  }
}
