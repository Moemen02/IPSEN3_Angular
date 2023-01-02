import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../../../models/Waste/article.model";

@Component({
  selector: 'app-single-waste',
  templateUrl: './single-waste.component.html',
  styleUrls: ['./single-waste.component.scss']
})
export class SingleWasteComponent implements OnInit{

  @Input() waste: Article;

  ngOnInit(){
    console.log(this.waste)
  }
}
