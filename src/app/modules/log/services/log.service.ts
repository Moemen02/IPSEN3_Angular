import { Injectable } from '@angular/core';
import {HttpService} from "../../../services/http.service";
import {ArticleOrderModel} from "../../order/models/ArticleOrder.model";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private httpService: HttpService) { }

  public async createLog(article: ArticleOrderModel) {
    return await firstValueFrom(this.httpService.sendData<ArticleOrderModel>("/api/v2/order/log", article))
  }
}
