import { Composition } from "src/app/modules/article/models/composition.model";
import { HttpService } from "src/app/services/http.service";
import {Injectable} from "@angular/core";
import { Subject } from "rxjs";
import { ArticleData } from "src/app/modules/article/models/article-data.model";


@Injectable({providedIn: 'root'})
export class CategoryWasteService{

  inComingData = new Subject<any>()

  constructor(private http: HttpService) {}

  sendComposition(comp: Composition, page:number) {
    this.http.sendPostPage("/api/v2/category-waste/composition", comp, page).subscribe(data => {
      this.inComingData.next(data)
    })
  }

}
