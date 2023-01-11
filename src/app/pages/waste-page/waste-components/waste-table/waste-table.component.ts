import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../../../services/http.service";
import { Waste } from "../../../../models/Waste/waste.model";

@Component({
  selector: 'app-waste-table',
  templateUrl: './waste-table.component.html',
  styleUrls: ['./waste-table.component.scss']
})
export class WasteTableComponent implements OnInit {
  searchText: string;
  listLength = 0

  ngOnInit() {
    this.getArticles(0);
  }

  constructor(private httpService: HttpService) { }
  wastes: Waste[] = []
  singleArticle: Waste | undefined


  public getArticles(page: number): void {
    this.httpService.getDataPage("/api/v2/waste", page)
      .subscribe((_waste) => {
        this.listLength = _waste.headers.get("full_list_length")
        this.wastes = _waste.body
      })
  }
}
