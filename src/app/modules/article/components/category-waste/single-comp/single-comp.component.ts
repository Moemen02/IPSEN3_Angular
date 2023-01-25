import { Component, Input } from '@angular/core';
import { Category } from 'src/app/modules/article/models/category.model';

@Component({
  selector: 'app-single-comp',
  templateUrl: './single-comp.component.html',
  styleUrls: ['./single-comp.component.scss']
})
export class SingleCompComponent {

  @Input("waste") waste: Category;
}
