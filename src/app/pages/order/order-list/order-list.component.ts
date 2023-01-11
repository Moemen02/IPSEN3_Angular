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
    this.httpService.getData<WasteOrder>("/api/v2/waste_order")
      .subscribe((_wasteOrders) =>{
        this.wasteOrders = _wasteOrders
      })
  }

}
