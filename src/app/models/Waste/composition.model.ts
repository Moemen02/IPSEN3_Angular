export class Composition {
  constructor(
    public name: string,
    public color: number,
    public conditions:condition[]
  ) { }
}

export class condition {
  constructor(
    public amount:number,
    public type:string,
    public condition:string
  ) { }
}