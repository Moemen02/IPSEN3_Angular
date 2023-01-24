import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../../../services/http.service";
import { Article } from "../../../../models/Waste/article.model";

@Component({
  selector: 'app-waste-table',
  templateUrl: './waste-table.component.html',
  styleUrls: ['./waste-table.component.scss']
})
export class WasteTableComponent implements OnInit {
  searchText: string;
  loading = true
  listLength = 0

  ngOnInit() {
    this.getArticles(0);
  }

  constructor(private httpService: HttpService) {}
  wastes: Article[] = []
  singleArticle: Article | undefined


  public getArticles(page: number): void {
    this.loading = true;
    this.httpService.getDataPage("/api/v2/waste", page)
      .subscribe((_waste) => {
        this.listLength = _waste.headers.get("full_list_length")
        this.wastes = _waste.body
        this.loading = false;
      })
  }

  // getArticle(): void{
  //   this.httpService.getSingleData<Article>("/api/article/1")
  //     .subscribe((_aricle)=>{
  //       this.singleArticle = _aricle
  //     })
  // }
}
