import { Injectable } from '@angular/core';
import {Category_location} from "../../core/models/Category_location.model";
import {HttpService} from "../../../services/http.service";
import {ArticleOrderModel} from "../../order/models/ArticleOrder.model";
import {firstValueFrom} from "rxjs";
import {Article} from "../../article/models/article.model";

@Injectable({
  providedIn: 'root'
})
export class LocationServiceService {

  constructor(private httpService: HttpService) {}


  public async getLocation(wasteOrder: ArticleOrderModel) {
   return await firstValueFrom(this.httpService.getSingleData<Category_location>("/api/v2/article_order/" + wasteOrder.id + "/article/location"))

  }
  public async getArticleLocation(wasteOrder: Article) {
    return await firstValueFrom(this.httpService.getSingleData<Category_location>("/api/v2/article/" + wasteOrder.id + "/location"))

  }
}
