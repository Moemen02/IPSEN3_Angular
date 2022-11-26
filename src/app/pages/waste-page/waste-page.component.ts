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
    this.getApi();
  }

  constructor(private httpService: HttpService) {}
  articles: Article[] = [
    new Article()
  ]
  newArticles: Object[] = []


  public getApi(){
    this.httpService.getData("api/article", this.articles)
    this.newArticles = this.httpService.data
    // console.log(this.newArticles)
  }
}
