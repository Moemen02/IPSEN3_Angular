import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {resetParseTemplateAsSourceFileForTest} from "@angular/compiler-cli/src/ngtsc/typecheck/diagnostics";
import {Article} from "../models/article.model";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class HttpService{
  public url = "http://localhost:8080/"
  constructor(private http: HttpClient) {}

  public getData<T>(path: String): Observable<Array<T>>{
    return this.http
      .get<T[]>(this.url+path)
  }
}

