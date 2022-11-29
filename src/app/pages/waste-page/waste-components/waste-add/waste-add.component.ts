import {Component} from '@angular/core';


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

  addArticle(){

  }

}
