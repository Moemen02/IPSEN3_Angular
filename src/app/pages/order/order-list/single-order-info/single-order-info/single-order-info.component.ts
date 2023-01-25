import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ArticleOrderModel} from "../../../../../models/ArticleOrder.model";import {ArticleLocationModel} from "../../../../../models/Article.Location.model";
import {Article} from "../../../../../models/Waste/article.model";
import {HttpService} from "../../../../../services/http.service";
import {Label} from "../../../../../models/Label.model";

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
  @Input() numInList: number;
  @Output() newItemEvent = new EventEmitter<{ inpNum: number, article: ArticleOrderModel }>;

  public removeOrder(num: number, article: ArticleOrderModel){
    this.httpService.updateData<ArticleOrderModel>("/api/v2/article_order/" + article.id + "/update", article).subscribe((article) => {
      this.newItemEvent.emit({inpNum: num, article: article})
    })
  }
}
