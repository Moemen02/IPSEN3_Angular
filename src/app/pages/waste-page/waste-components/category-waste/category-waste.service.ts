import { Composition } from "src/app/models/Waste/composition.model";
import { HttpService } from "src/app/services/http.service";
import {Injectable} from "@angular/core";
import { Subject } from "rxjs";
import { WasteDataModel } from "src/app/models/Waste/waste-data.model";


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
