export class WasteDataModel {
  private _color!: string;
  private _composition!: string;
  private _eancode!: string;
  private _id: number;
  private _patternWIdth!: number;
  private _patternLength!: number;
  private _productGroup!: string;
  private _stockRL!: boolean;
  private _supplier!: string;


  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }

  get composition(): string {
    return this._composition;
  }

  set composition(value: string) {
    this._composition = value;
  }

  get eancode(): string {
    return this._eancode;
  }

  set eancode(value: string) {
    this._eancode = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get patternWIdth(): number {
    return this._patternWIdth;
  }

  set patternWIdth(value: number) {
    this._patternWIdth = value;
  }

  get patternLength(): number {
    return this._patternLength;
  }

  set patternLength(value: number) {
    this._patternLength = value;
  }

  get productGroup(): string {
    return this._productGroup;
  }

  set productGroup(value: string) {
    this._productGroup = value;
  }

  get stockRL(): boolean {
    return this._stockRL;
  }

  set stockRL(value: boolean) {
    this._stockRL = value;
  }

  get supplier(): string {
    return this._supplier;
  }

  set supplier(value: string) {
    this._supplier = value;
  }
}
