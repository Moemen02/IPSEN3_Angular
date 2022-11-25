import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class HttpService{
  private url = "http://localhost:8080/"
  constructor(private http: HttpClient) {}

  getData(path: String){
    this.http
      .get(this.url+path)
      .subscribe(response => {
        console.log(response)
      })
  }
}

