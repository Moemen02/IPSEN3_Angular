import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {resetParseTemplateAsSourceFileForTest} from "@angular/compiler-cli/src/ngtsc/typecheck/diagnostics";
import {Observable} from "rxjs";
import { environment } from "../environments/environment";

@Injectable({providedIn: 'root'})
export class HttpService{
  public url = environment.apiURL
  constructor(private http: HttpClient) {}

  headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set("Authorization", "Bearer " + localStorage.getItem("auth_key"));

  public getData<T>(path: String): Observable<Array<T>>{
    console.log(this.url)
    return this.http
      .get<T[]>(this.url+path, {'headers':this.headers})
  }

  public getSingleData<T>(path: String): Observable<T>{
    return this.http
      .get<T>(this.url+path, {'headers':this.headers})
  }

  public sendData<T>(path:string, data:any): Observable<T>{
    return this.http.post<T>(this.url + path, data, {
      'headers':this.headers
    })
  }
}
