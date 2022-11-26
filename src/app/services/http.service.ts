import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {resetParseTemplateAsSourceFileForTest} from "@angular/compiler-cli/src/ngtsc/typecheck/diagnostics";

@Injectable({providedIn: 'root'})
export class HttpService{
  public url = "http://localhost:8080/"
  constructor(private http: HttpClient) {}
  data: Object[] = [];

  public getData(path: String, Model: Object){
    this.http
      .get<typeof Model[]>(this.url+path)
      .subscribe(response => {
        this.data = response
        console.log(this.data)
      })
  }
}

