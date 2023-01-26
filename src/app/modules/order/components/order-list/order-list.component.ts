import {Component, OnInit, ViewChild} from '@angular/core';
import {ArticleOrderModel} from "../../models/ArticleOrder.model";
import {HttpService} from "../../../../services/http.service";
import {Subject} from "rxjs";
import {LogService} from "../../../log/services/log.service";



@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  changingValue: Subject<boolean> = new Subject();

  ngOnInit() {
    this.getAllWasteOrders();
  }

  constructor(private httpService: HttpService, private logService: LogService) {}
  wasteOrders: ArticleOrderModel[] = []
  wasteOrder: ArticleOrderModel

  public remove($event: { inpNum: number; article: ArticleOrderModel }){
    this.wasteOrders.splice($event.inpNum, 1)
    this.changingValue.next(true)
    this.logService.createLog($event.article)
      .then((response) => {
        console.log(response)
      })
  }


  public getAllWasteOrders(): void{
    this.httpService.getData<ArticleOrderModel>("/api/v2/article_order")
      .subscribe((_wasteOrders) =>{
        for (let i = 0; i < _wasteOrders.length; i++) {
          if (!_wasteOrders[i].finished){
            this.wasteOrders.push(_wasteOrders[i]);

          }
        }

      })
  }

}
