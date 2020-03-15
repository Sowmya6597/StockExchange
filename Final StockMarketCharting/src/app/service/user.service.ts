import { Injectable ,Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpUrl=environment.url + "user-service/registerall/";
  user:User;
  constructor(private httpClient:HttpClient ,@Inject(HttpClient) private ht) { }
  saveUser(user:User):Observable<User>{
    return this.httpClient.post<User>(this.httpUrl, user);
  }
  deleteUser(id:number):Observable<User>{
    return this.ht.delete(this.httpUrl+id);
  }
  getAllUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.httpUrl);
  }
  updateUser(user :User): Observable<User>{
    return this.ht.put(this.httpUrl,user);
  }
  getUserById(id: number): Observable<User> {
return this.ht.get(this.httpUrl+id);
  }
  serviceActivation(obj){
    return this.ht.put(this.httpUrl+"activate",obj)
  }
  LoggedIn(){
    let user_id=localStorage.getItem('userId');
    if(user_id==null)
    return false;
    else return true;
  }
  isActivated(user:User){
    if(user.active==true){
          return true;
    }
  }
}
