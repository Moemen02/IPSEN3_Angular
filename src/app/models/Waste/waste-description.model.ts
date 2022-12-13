export class WasteDescriptionModel{
  private _id!: number;
  private _articlenumber!: string;
  private _description!: string;
  private _cloth_width!: number;
  private _type!: string;
  private _layout!: string;
  private _washcode!: string;
  private _weight!: number;
  private _not_tiltable!: boolean;
  private _minimumStock!: number;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get articlenumber(): string {
    return this._articlenumber;
  }

  set articlenumber(value: string) {
    this._articlenumber = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get cloth_width(): number {
    return this._cloth_width;
  }

  set cloth_width(value: number) {
    this._cloth_width = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get layout(): string {
    return this._layout;
  }

  set layout(value: string) {
    this._layout = value;
  }

  get washcode(): string {
    return this._washcode;
  }

  set washcode(value: string) {
    this._washcode = value;
  }

  get weight(): number {
    return this._weight;
  }

  set weight(value: number) {
    this._weight = value;
  }

  get not_tiltable(): boolean {
    return this._not_tiltable;
  }

  set not_tiltable(value: boolean) {
    this._not_tiltable = value;
  }

  get minimum_stock(): number {
    return this._minimumStock;
  }

  set minimum_stock(value: number) {
    this._minimumStock = value;
  }
}
