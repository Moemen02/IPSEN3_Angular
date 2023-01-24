import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Article} from "../../../../models/Waste/article.model";
import {HttpService} from "../../../../services/http.service";
import {ArticleData} from "../../../../models/Waste/article-data.model";
import {ArticleDescription} from "../../../../models/Waste/article-description.model";
import {firstValueFrom} from "rxjs";


@Component({
  selector: 'app-waste-add',
  templateUrl: './waste-add.component.html',
  styleUrls: ['./waste-add.component.scss']
})
export class WasteAddComponent {
  constructor(private http: HttpService) {
  }

  private articleData = new ArticleData;
  private articleDescription = new ArticleDescription;
  private article = new Article;

  wasteDataID = 0
  wasteDescripton = 0

  customers: string[] = [
    'Henk',
    'Lorens',
    'Stacey'
  ];

  not_tiltable = {
    'ableToTilt': ['Kantelbaar', 'Onkantelbaar'],
    'tiltValues': [false, true]
  }

  stockRL = {
    'ifStockIsArticle': ['Ja', 'Nee'],
    'stockRLValues': [true, false]
  }

  inputData: FormGroup = new FormGroup({
    'articleData': new FormGroup({
      'color': new FormControl(null, Validators.required),
      'productgroup': new FormControl(null, Validators.required),
      'supplier': new FormControl(null, Validators.required),
      'pattern_width': new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]+[0-9]*$/)]),
      'pattern_length': new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]+[0-9]*$/)]),
      'composition': new FormControl(null, Validators.required),
      'eancode': new FormControl(null, Validators.required),
      'stockRL': new FormControl(null, Validators.required)
    }),
    'articleDescription': new FormGroup({
      'weight': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'layout': new FormControl(null, Validators.required),
      'washcode': new FormControl(null, Validators.required),
      'type': new FormControl(null, Validators.required),
      'not_tiltable': new FormControl(null, Validators.required),
      'article_number': new FormControl(null, Validators.required),
      'cloth_width': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'minimum_stock': new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]+[0-9]*$/)]),
      'description': new FormControl(null, Validators.required)
    }),
    'customer': new FormControl(null, Validators.required)
  });


  async onSubmit() {
    this.articleData = this.inputData.controls['articleData'].value;
    this.articleDescription = this.inputData.controls['articleDescription'].value;

    const data = await firstValueFrom(this.http.sendData<ArticleData>("/api/v2/article_data", this.articleData))
    const desc = await firstValueFrom(this.http.sendData<ArticleDescription>("/api/v2/article_description", this.articleDescription))

    this.article.article_dataID = data
    this.article.article_descriptionID = desc

    this.http.sendData<Article>("/api/v2/article", this.article).subscribe(data => {} );
    this.onCancel();
  }


  onCancel() {
    this.inputData.reset();
  }

}
