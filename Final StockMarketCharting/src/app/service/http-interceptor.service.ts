import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(public auth:AuthServiceService) { }
  intercept(request:HttpRequest<any>,next:HttpHandler){
    console.log("Inside Interceptor");
    if(this.auth.getAuthenticationToken()){
      let authenticationToken=this.auth.getAuthenticationToken();
      request=request.clone({
        setHeaders:{
          Authorization:authenticationToken
         }
      });
    }
    return next.handle(request);
  }
}
