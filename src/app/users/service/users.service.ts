import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

const url = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  counter = 0;
  i = 0;
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(url);
  }

  getById(id: any): Observable<User> {
    return this.http.get(`${url}/${id}`);
  }
  createUser(data: any): Observable<any>{
    return this.http.post(url, data);
  }

  updateUser(id: any, data: any): Observable<any> {
    return this.http.put(url + '/' + id, data);
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete(`${url}/${id}`);
  }
  deleteAllUsers(): Observable<any> {
    return this.http.delete(url);
  }

  findUserByName(name: any): Observable<User[]> {
    return this.http.get<User[]>(`${url}?q=${name}`);
  }

}
