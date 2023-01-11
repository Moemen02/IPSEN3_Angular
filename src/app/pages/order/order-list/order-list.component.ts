import {Component, OnInit} from '@angular/core';
import {WasteOrder} from "../../../models/WasteOrder.model";

import {HttpService} from "../../../services/http.service";



@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  ngOnInit() {
    this.getAllWasteOrders();
  }

  constructor(private httpService: HttpService) {}
  wasteOrders: WasteOrder[] = []
  wasteOrder: WasteOrder


  public getAllWasteOrders(): void{
    this.httpService.getData<WasteOrder>("/api/v2/article_order")
      .subscribe((_wasteOrders) =>{
        for (let i = 0; i < _wasteOrders.length; i++) {
          if (!_wasteOrders[i].finished){
            this.wasteOrders.push(_wasteOrders[i]);

          }
        }

      })
  }

}
