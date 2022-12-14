import {Component, Input, OnInit} from '@angular/core';
import {Waste} from "../../../../models/Waste/waste.model";

@Component({
  selector: 'app-single-waste',
  templateUrl: './single-waste.component.html',
  styleUrls: ['./single-waste.component.scss']
})
export class SingleWasteComponent implements OnInit{

  @Input() waste: Waste;

  ngOnInit(){
    console.log(this.waste)
  }
}
