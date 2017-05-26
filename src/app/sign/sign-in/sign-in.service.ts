import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
/**
 * Created by 林皓 on 2017/5/26 0026.
 */


@Injectable()
export class SignInService{

  constructor(private http: Http) {
  }

  getCustomers(){
    return this.http.get('http://localhost:8080/user');
  }
}
