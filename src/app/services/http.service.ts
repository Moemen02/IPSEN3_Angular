import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { resetParseTemplateAsSourceFileForTest } from "@angular/compiler-cli/src/ngtsc/typecheck/diagnostics";
import { Observable, map } from "rxjs";
import { environment } from "../environments/environment";

@Injectable({ providedIn: 'root' })
export class HttpService {
  public url = environment.apiURL
  constructor(private http: HttpClient) { }

  headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set("Authorization", "Bearer " + localStorage.getItem("auth_key"));

  public getData<T>(path: String): Observable<Array<T>> {
    return this.http
      .get<T[]>(this.url + path, { 'headers': this.headers })
  }

  public getDataPage(path: String, page: number): Observable<any> {
    return this.http.get<any>(this.url + path, {
        'headers': this.headers,
        "params": { "page": page },
        observe: "response"
      })
  }

  public getSingleData<T>(path: String): Observable<T> {
    return this.http
      .get<T>(this.url + path, { 'headers': this.headers })
  }

  public sendData<T>(path: string, data: any): Observable<T> {
    return this.http.post<T>(this.url + path, data, {
      'headers': this.headers
    })
  }

  public updateData<T>(path: string, data: any): Observable<T> {
    return this.http.put<T>(this.url + path, data, {
      'headers': this.headers
    })
  }

  public sendPostPage(path: string, data: any, page: number): Observable<any> {
    return this.http.post(this.url + path, data, {
      'headers': this.headers,
      "params": { "page": page },
      observe: "response"
    })
  }
}
