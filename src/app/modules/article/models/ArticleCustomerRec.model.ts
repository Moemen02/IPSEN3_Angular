import {Article} from "./article.model";
import {Customer} from "../../core/models/customer.model";

export class ArticleCustomerRec {
  private _article: Article;
  private _customer: Customer;

  get article(): Article {
    return this._article;
  }

  set article(value: Article) {
    this._article = value;
  }

  get customer(): Customer {
    return this._customer;
  }

  set customer(value: Customer) {
    this._customer = value;
  }
}
