import { Component } from '@angular/core';
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-waste-page',
  templateUrl: './waste-page.component.html',
  styleUrls: ['./waste-page.component.scss']
})
export class WastePageComponent {
  constructor(private httpService: HttpService) {}

  public getApi(){
    this.httpService.getData("api/article")
  }
}
