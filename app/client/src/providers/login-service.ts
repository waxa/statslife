import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LoginService {

  constructor(public http: Http) {
    console.log('Hello LoginService Provider');
  }

  // private handleError (error: Response | any) {
  //   // In a real world app, we might use a remote logging infrastructure
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     const body = error.json() || '';
  //     const err = body.error || JSON.stringify(body);
  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   console.error(errMsg);
  //   return Observable.throw(errMsg);
  // }

  public loginState(): Observable<any> {
    return this.http.get('/api/login')
    .catch(error => Observable.throw(error));
  };

  public doLogin(): Observable<any> {
    return this.http.post('/api/login', {username: "waxa", password: "waxa"})
    .catch(error => Observable.throw(error));
  };

  public logout(): Observable<any> {
    return this.http.delete('/api/login')
    .catch(error => Observable.throw(error));
  }

}
