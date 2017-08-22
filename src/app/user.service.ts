import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Http, Headers } from "@angular/http";

import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

  userEndpoint:string = "https://babuaryal.herokuapp.com/";
  LOGIN_PATH:string = "login";//for login
  GET_ALL_USERS_PATH:string = "users";//to load all users from database
  ADD_USER_PATH:string = "user/add";//to add new user

  constructor(private router: Router, private http:Http) { }


}
