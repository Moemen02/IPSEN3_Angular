import {Component, Input, OnInit} from '@angular/core';
import {ArticleOrderModel} from "../../../../../models/ArticleOrder.model";import {ArticleLocationModel} from "../../../../../models/Article.Location.model";

@Component({
  selector: 'app-single-order-info',
  templateUrl: './single-order-info.component.html',
  styleUrls: ['./single-order-info.component.scss']
})
export class SingleOrderInfoComponent implements OnInit{

  ngOnInit() {
  }

  @Input() wasteOrder: ArticleOrderModel
}
