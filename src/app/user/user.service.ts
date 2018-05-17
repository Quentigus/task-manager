import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

export class User {
  token: string;      // BEDFC950-5D4E-7A49-FFBF-8893AFDEC700

  objectId: string;   // 4DCC129D-6D26-9EC4-FF44-1E56F29EF100
  name: string;       // Quentigus
  email: string;      // quentin.gosselin@gmail.com
  
  lastLogin: number;  // 1523309548447
  created: number;    // 1523194982522
  updated: number;    // 1523194987235
  
  // userStatus: ENABLED,
}

class LoginInput {
  email: string;
  password: string;
}

class RegisterInput extends LoginInput {
  name: string;
}

@Injectable()
export class UserService {
  private url: string = environment.services.users;

  constructor(
    private httpClient: HttpClient
  ) { }

  login(datas: LoginInput): Observable<User> {
    return this.httpClient.post<User>(this.url, datas);
  }

  register(datas: RegisterInput): Observable<User> {
    return this.httpClient.put<User>(this.url, datas);
  }
}
