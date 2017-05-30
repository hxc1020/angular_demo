import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';

@Injectable()
export class SignInService{

  constructor(private http: Http) {
  }

  getCustomers(){
    return this.http.get('/user');
  }

  signIn(name: string, password: string): Int32Array | string{
    let p = Md5.hashStr(password);
    return p;
  }
}
