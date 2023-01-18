export class Category{
  constructor(
    public eancode: string,
    public color: string,
    public composition: string,
    public articlenumber: string,
    public description: string,
    public type: string,
    public weight: number
  ) {}
}