import {Component, Input, OnInit} from '@angular/core';
import {LogModel} from "../../models/Log.model";
import {HttpService} from "../../../../services/http.service";
import {ArticleOrderModel} from "../../../order/models/ArticleOrder.model";

@Component({
  selector: 'app-single-log-info',
  templateUrl: './single-log-info.component.html',
  styleUrls: ['./single-log-info.component.scss']
})
export class SingleLogInfoComponent implements OnInit{

  @Input() log: LogModel;

  employee = null;
  order: ArticleOrderModel;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {

    this.getOrder()

  }

  public getOrder(){

    this.httpService.getSingleData<ArticleOrderModel>("/api/v2/article_order/" + this.log.orderID)
      .subscribe((response) => {
        this.order = response;
      })

  }

  public getEmployee(){

  }

}
