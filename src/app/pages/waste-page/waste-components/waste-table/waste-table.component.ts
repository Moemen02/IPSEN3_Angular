import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../../../services/http.service";
import { Article } from "../../../../models/Waste/article.model";

@Component({
  selector: 'app-waste-table',
  templateUrl: './waste-table.component.html',
  styleUrls: ['./waste-table.component.scss']
})
export class WasteTableComponent implements OnInit{

  searchText;

  ngOnInit() {
    this.getArticles();
  }

  constructor(private httpService: HttpService) {}
  wastes: Article[] = []
  singleArticle: Article | undefined


  public getArticles(): void{
    this.httpService.getData<Article>("/api/v2/waste/1/8")
      .subscribe((_waste)=>{
        console.log(_waste)
        this.wastes = _waste
      })
  }

  // getArticle(): void{
  //   this.httpService.getSingleData<Article>("/api/article/1")
  //     .subscribe((_aricle)=>{
  //       this.singleArticle = _aricle
  //     })
  // }
}
