import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


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
    'wasteData': new FormGroup({
      'color': new FormControl(null, Validators.required),
      'productgroup': new FormControl(null, Validators.required),
      'supplier': new FormControl(null, Validators.required),
      'pattern_width': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'pattern_length': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'composition': new FormControl(null, Validators.required),
      'eancode': new FormControl(null, Validators.required),
      'stockRL': new FormControl(null, Validators.required)
    }),
    'wasteDescription': new FormGroup({
      'weight': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'layout': new FormControl(null, Validators.required),
      'washcode': new FormControl(null, Validators.required),
      'type': new FormControl(null, Validators.required),
      'not_tiltable': new FormControl( null, Validators.required),
      'article_number': new FormControl(null, Validators.required),
      'cloth_width': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'minimum_stock': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required)
    }),
    'customer': new FormControl(null, Validators.required)
  });

  onSubmit() {
    console.log(this.inputData.value);
    this.onCancel();
  }

  onCancel() {
    this.inputData.reset();
  }

}
