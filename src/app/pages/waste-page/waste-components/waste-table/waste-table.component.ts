import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../../../services/http.service";
import {Article} from "../../../../models/article.model";

@Component({
  selector: 'app-waste-table',
  templateUrl: './waste-table.component.html',
  styleUrls: ['./waste-table.component.scss']
})
export class WasteTableComponent implements OnInit{
  displayedColumns: string[] = ['eancode', 'description', 'color', 'vPrice', 'aPrice', 'actions'];

  ngOnInit() {
    this.getArticles();
    this.getArticle();
  }

  constructor(private httpService: HttpService) {}
  articles: Article[] = []
  singleArticle: Article | undefined


  public getArticles(): void{
    this.httpService.getData<Article>("/api/article")
      .subscribe((_aricles)=>{
        this.articles = _aricles
      })
  }

  getArticle(): void{
    this.httpService.getSingleData<Article>("/api/article/1")
      .subscribe((_aricle)=>{
        this.singleArticle = _aricle
      })
  }
}
