import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { ObservableLike } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class StudentsmanagementService {

  constructor(private http: Http) { }
  getData(url: string){
    return this.http.get(url)
    //.toPromise()
    //.then(res => res.json());
    //.catch(err => console.log(err))
    .map((response: any) => response.json())
  }
  sendPostForm(url: string, value) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(value);
    return this.http.post(url, body, { headers })
    .toPromise()
    .then(res => res.json())
    .catch(err => console.log(err))
    //map((response: Response) => response.json())
  }
  sendPutForm(url: string, value) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(value);
    return this.http.put(url, body, { headers })
    .toPromise()
    .then(res => res.json())
    .catch(err => console.log(err))
    //.map((response: Response) => response.json())
  }

  sendDeleteForm(url: string) {
    const headers = new Headers({ 'Content-Type': 'application.json' });
    //const body = JSON.stringify(value);
    return this.http.delete(url,{headers})
    .toPromise()
    .then(res => res.json())
    .catch(err => console.log(err))
    //.map((response: Response) => response.json());
  }
}
