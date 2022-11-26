import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {Article} from "../../models/article.model";

@Component({
  selector: 'app-waste-page',
  templateUrl: './waste-page.component.html',
  styleUrls: ['./waste-page.component.scss']
})
export class WastePageComponent implements OnInit{

  ngOnInit() {
    this.getArticles();
  }

  constructor(private httpService: HttpService) {}
  articles: Article[] = []


  public getArticles(): void{
    this.httpService.getData<Article>("api/article")
      .subscribe((_aricles)=>{
        this.articles = _aricles
      })
  }
}
