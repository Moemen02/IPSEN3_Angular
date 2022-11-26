import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {Article} from "../../models/article.model";
import {ArticleDetailModel} from "../../models/article-detail.model";

@Component({
  selector: 'app-waste-page',
  templateUrl: './waste-page.component.html',
  styleUrls: ['./waste-page.component.scss']
})
export class WastePageComponent implements OnInit{

  ngOnInit() {
    this.getArticles();
    this.getArticle();
  }

  constructor(private httpService: HttpService) {}
  articles: Article[] = []
  article: Article | undefined


  public getArticles(): void{
    this.httpService.getData<Article>("api/article")
      .subscribe((_aricles)=>{
        this.articles = _aricles
      })
  }

  getArticle(): void{
    this.httpService.getSingleData<Article>("api/article/1")
      .subscribe((_aricle)=>{
        this.article = _aricle
      })
  }
}
