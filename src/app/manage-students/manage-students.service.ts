import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ManageStudentsService {

  constructor(private http: Http) { }
  getData() {
    return this.http.get('http://5b1104db3ffdad0014dacd97.mockapi.io/managestudents/Students')
      .map((response: Response) => response.json())
  }
  sendPostForm(url: string, value) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(value);
    return this.http.post(url, body, { headers })
      .toPromise()
      .then(res => res.json())
  }
  sendPutForm(url: string, value) {
    const headers = new Headers({ 'Content-Type': 'application.json' });
    const body = JSON.stringify(value);
    return this.http.put(url, body, { headers })
      .toPromise()
      .then(res => res.json())
  }

  sendDeleteForm(url: string, value) {
    const headers = new Headers({ 'Content-Type': 'application.json' });
    const body = JSON.stringify(value);
    return this.http.delete(url,{headers})
      .toPromise()
      .then(res => res.json())
  }
}
