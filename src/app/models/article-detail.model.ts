export class ArticleDetailModel{
  private _eancode!: string;
  private _productgroep!: string;
  private _supplier!: string;


  get eancode(): string {
    return this._eancode;
  }

  set eancode(value: string) {
    this._eancode = value;
  }

  get productgroep(): string {
    return this._productgroep;
  }

  set productgroep(value: string) {
    this._productgroep = value;
  }

  get supplier(): string {
    return this._supplier;
  }

  set supplier(value: string) {
    this._supplier = value;
  }
}
