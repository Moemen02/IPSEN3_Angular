import {Component, Input, OnInit} from '@angular/core';
import {ArticleOrderModel} from "../../../../../models/ArticleOrder.model";import {ArticleLocationModel} from "../../../../../models/Article.Location.model";
import {Label} from "../../../../../models/Label.model";
import {HttpService} from "../../../../../services/http.service";

@Component({
  selector: 'app-single-order-info',
  templateUrl: './single-order-info.component.html',
  styleUrls: ['./single-order-info.component.scss']
})
export class SingleOrderInfoComponent implements OnInit{

  toOpen = true
  img = ""
  content = ""

  constructor(private httpService: HttpService) {}

  ngOnInit() {
  }

  getLabel() {
    if (this.toOpen) {
      this.toOpen = false

    } else {
      this.toOpen = true
    }
    this.httpService.getData<any>("/api/v2/label/data/" + this.wasteOrder.id).subscribe(e => {
      if (e["content"] === "noLabel") this.content = e["content"]
      else this.img = "data:image/png;base64, " + e["content"]
    })

  }

  @Input() wasteOrder: ArticleOrderModel
}
