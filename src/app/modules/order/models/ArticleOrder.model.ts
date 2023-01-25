import {Article} from "../../article/models/article.model";
import {Customer} from "../../core/models/customer.model";

export class ArticleOrderModel {
  private _id!: number
  private _articleID!: Article;
  private _customerID!: Customer;
  private _finished!: boolean;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get articleID(): Article {
    return this._articleID;
  }

  set articleID(value: Article) {
    this._articleID = value;
  }

  get finished(): boolean {
    return this._finished;
  }

  set finished(value: boolean) {
    this._finished = value;
  }

  get customerID(): Customer {
    return this._customerID;
  }

  set customerID(value: Customer) {
    this._customerID = value;
  }
}
