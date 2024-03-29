import {Component, Input, OnInit, Output, EventEmitter, AfterViewInit} from '@angular/core';
import {ArticleOrderModel} from "../../../models/ArticleOrder.model";import {ArticleLocationModel} from "../../../../article/models/Article.Location.model";
import {Article} from "../../../../article/models/article.model";
import {HttpService} from "../../../../../services/http.service";
import {Label} from "../../../../label/models/Label.model";
import {Category_location} from "../../../../core/models/Category_location.model";
import {LocationServiceService} from "../../../../location/service/location-service.service";
import {Subject, timeout} from "rxjs";
import {LogService} from "../../../../log/services/log.service";

@Component({
  selector: 'app-single-order-info',
  templateUrl: './single-order-info.component.html',
  styleUrls: ['./single-order-info.component.scss']
})
export class SingleOrderInfoComponent implements OnInit{
  @Input() changing: Subject<boolean>;

  toOpen = true
  img = ""
  pdf = ""
  name = ""
  content = ""

  constructor(private httpService: HttpService, private locationService: LocationServiceService) {}

  ngOnInit() {
    this.getLocation()
    setTimeout(() => {
      this.getLabel()
    }, 200 * this.numInList)
  }

  openPDF() {
    const link = document.createElement("a");
    link.href = this.pdf;
    link.download = `label ${this.name}.pdf`
    link.click();
  }

  getLabel() {
    if (this.toOpen) {
      this.toOpen = false

    } else {
      this.toOpen = true
    }
    this.httpService.getData<any>("/api/v2/label/data/" + this.wasteOrder.id).subscribe(e => {
      if (e["content"] === "noLabel") this.content = e["content"]
      else {
        console.log(e)
        this.name = e["name"]
        this.pdf = "data:application/pdf;base64, " + e["pdf"]
        this.img = "data:image/png;base64, " + e["content"]
      }
    })

  }

  categoryLocation: Category_location
  @Input() wasteOrder: ArticleOrderModel
  @Input() numInList: number;
  @Output() newItemEvent = new EventEmitter<{ inpNum: number, article: ArticleOrderModel }>;

  public removeOrder(num: number, article: ArticleOrderModel){
    this.httpService.updateData<ArticleOrderModel>("/api/v2/article_order/" + article.id + "/update", article).subscribe((article) => {
      this.newItemEvent.emit({inpNum: num, article: article})
    })
  }

  public getLocation():void {
    this.locationService.getLocation(this.wasteOrder)
      .then((response) => {
        this.categoryLocation = response
      })
    }
}
