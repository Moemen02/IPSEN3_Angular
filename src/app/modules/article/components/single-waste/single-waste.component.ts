import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../models/article.model";
import {Category_location} from "../../../core/models/Category_location.model";
import {HttpService} from "../../../../services/http.service";
import {LocationServiceService} from "../../../location/service/location-service.service";

@Component({
  selector: 'app-single-waste',
  templateUrl: './single-waste.component.html',
  styleUrls: ['./single-waste.component.scss']
})
export class SingleWasteComponent implements OnInit{

  @Input() waste: Article;
  categoryLocation: Category_location
  constructor(private httpService: HttpService, private locationService: LocationServiceService) {}

  ngOnInit(){
    this.getLocation()
  }

  public getLocation():void{
     this.locationService.getArticleLocation(this.waste)
       .then((response)=>{

         this.categoryLocation = response
       })
       .catch(e =>{})
  }
}
