/**
 * Created by 林皓 on 2017/5/28 0028.
 */
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {
  Http,
  RequestOptionsArgs,
  RequestOptions,
  Response,
  Headers
} from '@angular/http';

const mergeToken = (options: RequestOptionsArgs = {}) => {
  const newOptions = new RequestOptions({}).merge(options);
  const newHeaders = new Headers(newOptions.headers);
  const jwt = localStorage.getItem('jwt');
  if (jwt) {
    newHeaders.set('authorization', `Bearer ${jwt}`);
  }
  newOptions.headers = newHeaders;
  return newOptions;
};

@Injectable()
export class MyHttp {

  constructor(private http: Http) {
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.get(url, mergeToken(options));
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.post(url, body, mergeToken(options));
  }

  put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.put(url, body, mergeToken(options));
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.delete(url, mergeToken(options));
  }

  patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.patch(url, body, mergeToken(options));
  }

  head(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.http.head(url, mergeToken(options));
  }

}
