/**
 * Created by 林皓 on 2017/5/28 0028.
 */
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {MyHttp} from './MyHttp';
import {User} from '../model/user.model';
import {JwtHelper} from 'angular2-jwt';

@Injectable()
export class AuthService {

  private authEvents: Subject<AuthEvent>;
  private jwtHelper: JwtHelper = new JwtHelper();

  constructor(private http: MyHttp) {
    this.authEvents = new Subject<AuthEvent>();
  }

  signIn(name: string, password: string): Observable<Response> {
    const body = {
      name: name,
      password: password,
    };
    return this.http.post('/sign/in', body).do((resp: Response) => {
      const token = resp.json().token;
      const decodeToken = this.jwtHelper.decodeToken(token);
      localStorage.setItem('token', token);
      localStorage.setItem('userId', decodeToken.userId);
      this.authEvents.next(new DidLogin());
    });
  }

  signUp(name: string, password: string): Observable<Response> {
    const body = {
      name: name,
      password: password,
    };
    return this.http.post('/sign/up', body).do((resp: Response) => {
      const token = resp.json().token;
      const decodeToken = this.jwtHelper.decodeToken(token);
      localStorage.setItem('token', token);
      localStorage.setItem('userId', decodeToken.userId);
      this.authEvents.next(new DidLogin());
    });
  }

  checkUserName(name: string): Observable<Response> {
    return this.http.get(`/sign/check/${name}`);
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.authEvents.next(new DidLogout());
  }

  isSignedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  isMyself(user: User): boolean | null {
    if (!this.isSignedIn()) {
      return null;
    } // It means unknown.
    const decoded = this.jwtHelper.decodeToken(localStorage.getItem('token'));
    return user.id + '' === decoded.sub;
  }

  get events(): Observable<AuthEvent> {
    return this.authEvents;
  }

}

export class DidLogin {
}
export class DidLogout {
}

export type AuthEvent = DidLogin | DidLogout;

