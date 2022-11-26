export class Article {
  private _id!: number
  private _priceid!: number;
  private _eancode!: string;
  private _color!: string;
  private _layout!: string;
  private _washsymbol!: string;
  private _composition!: string;
  private _articleId!: number;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get priceid(): number {
    return this._priceid;
  }

  set priceid(value: number) {
    this._priceid = value;
  }

  get eancode(): string {
    return this._eancode;
  }

  set eancode(value: string) {
    this._eancode = value;
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }

  get layout(): string {
    return this._layout;
  }

  set layout(value: string) {
    this._layout = value;
  }

  get washsymbol(): string {
    return this._washsymbol;
  }

  set washsymbol(value: string) {
    this._washsymbol = value;
  }

  get composition(): string {
    return this._composition;
  }

  set composition(value: string) {
    this._composition = value;
  }

  get articleId(): number {
    return this._articleId;
  }

  set articleId(value: number) {
    this._articleId = value;
  }
}
