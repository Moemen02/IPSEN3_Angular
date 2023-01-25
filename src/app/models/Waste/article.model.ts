import {ArticleData} from "./article-data.model";
import {ArticleDescription} from "./article-description.model";
import {Usage} from "../Usage.model";

export class Article {
  private _id!: number
  private _article_dataID!: ArticleData;
  private _article_descriptionID!: ArticleDescription;
  private _usageID!: Usage;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get article_dataID(): ArticleData {
    return this._article_dataID;
  }

  set article_dataID(value: ArticleData) {
    this._article_dataID = value;
  }

  get article_descriptionID(): ArticleDescription {
    return this._article_descriptionID;
  }

  set article_descriptionID(value: ArticleDescription) {
    this._article_descriptionID = value;
  }

  get usageID(): Usage {
    return this._usageID;
  }

  set usageID(value: Usage) {
    this._usageID = value;
  }
}
