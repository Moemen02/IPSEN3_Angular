import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-waste-add',
  templateUrl: './waste-add.component.html',
  styleUrls: ['./waste-add.component.scss']
})
export class WasteAddComponent {
  customers: string[] = [
    'Henk',
    'Lorens',
    'Stacey'
  ];

  not_tiltable = {
    'ableToTilt' : ['Kantelbaar', 'Onkantelbaar'],
    'tiltValues' : [false, true]
  }

  stockRL = {
    'ifStockIsArticle' : ['Ja', 'Nee'],
    'stockRLValues' : [true, false]
  }

  inputData: FormGroup = new FormGroup({
    'color': new FormControl(null),
    'productgroup': new FormControl(null),
    'weight': new FormControl(null),
    'layout': new FormControl(null),
    'supplier': new FormControl(null),
    'pattern_width': new FormControl(null),
    'washcode': new FormControl(null),
    'type': new FormControl(null),
    'pattern_length': new FormControl(null),
    'composition': new FormControl(null),
    'customer': new FormControl(null),
    'not_tiltable': new FormControl( null),
    'article_number': new FormControl(null),
    'eancode': new FormControl(null),
    'cloth_width': new FormControl(null),
    'minimum_stock': new FormControl(null),
    'stockRL': new FormControl(null),
    'description': new FormControl(null)
  });

  onSubmit() {
    console.log(this.inputData.value);
    this.inputData.reset();
  }

}
