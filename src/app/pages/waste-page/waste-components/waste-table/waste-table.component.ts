import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../../../services/http.service";
import { Waste } from "../../../../models/waste.model";

@Component({
  selector: 'app-waste-table',
  templateUrl: './waste-table.component.html',
  styleUrls: ['./waste-table.component.scss']
})
export class WasteTableComponent implements OnInit{
  displayedColumns: string[] = ['eancode', 'description', 'color', 'vPrice', 'aPrice', 'actions'];

  ngOnInit() {
    this.getArticles();
    this.getArticles();
  }

  constructor(private httpService: HttpService) {}
  wastes: Waste[] = []
  singleArticle: Waste | undefined


  public getArticles(): void{
    this.httpService.getData<Waste>("/api/v2/waste")
      .subscribe((_waste)=>{
        this.wastes = _waste
        console.log(_waste)
      })
  }

  // getArticle(): void{
  //   this.httpService.getSingleData<Article>("/api/article/1")
  //     .subscribe((_aricle)=>{
  //       this.singleArticle = _aricle
  //     })
  // }
}
