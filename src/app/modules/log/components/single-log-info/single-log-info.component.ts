import {Component, Input, OnInit} from '@angular/core';
import {LogModel} from "../../models/Log.model";
import {HttpService} from "../../../../services/http.service";
import {ArticleOrderModel} from "../../../order/models/ArticleOrder.model";
import {HttpClient} from "@angular/common/http";
import {EmployeeModel} from "../../../client/models/employee.model";

@Component({
  selector: 'app-single-log-info',
  templateUrl: './single-log-info.component.html',
  styleUrls: ['./single-log-info.component.scss']
})
export class SingleLogInfoComponent implements OnInit{

  @Input() log: LogModel;

  employee: EmployeeModel;
  order: ArticleOrderModel;

  constructor(private httpService: HttpService, private http: HttpClient) {}

  ngOnInit(): void {

    this.getOrder()
    this.getEmployee()

  }

  public getOrder(){

    this.httpService.getSingleData<ArticleOrderModel>("/api/v2/article_order/" + this.log.orderID)
      .subscribe((response) => {
        this.order = response;
      })

  }

  public getEmployee(){
    this.httpService.getSingleData<EmployeeModel>("/api/auth/user/" + this.log.userID)
      .subscribe((response) => {
        this.employee = response;
      })
  }


}
