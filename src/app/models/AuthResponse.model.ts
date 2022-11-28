export class AuthResponse {
  public jwtToken:string
  public message:string
  public success:boolean

  constructor(jwtToken:string, message:string, success:boolean) {
    this.jwtToken = jwtToken
    this.message = message
    this.success = success
  }


  public get getToken() : string {
    return this.jwtToken
  }


  public get getMessage() : string {
    return this.message
  }


  public get isSuccess() : boolean {
    return this.success
  }


}