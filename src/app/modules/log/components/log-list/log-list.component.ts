import {Component, OnInit} from '@angular/core';
import {LogModel} from '../../models/Log.model'
import {HttpService} from "../../../../services/http.service";

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.scss']
})
export class LogListComponent implements OnInit{

  constructor(private httpService: HttpService) {}

  allLogs: LogModel[] = [];

  ngOnInit(): void {
   this.getAllLogs()
  }

  public getAllLogs(){
    this.httpService.getData<LogModel>("/api/v2/order/log")
      .subscribe((response) => {
        this.allLogs = response
      })
  }

}
