import {Article} from "./Waste/article.model";
import {Customer} from "./customer.model";

export class ArticleCustomer {
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
