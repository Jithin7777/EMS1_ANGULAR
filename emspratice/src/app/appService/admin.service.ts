import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  base_url="http://localhost:8000"

  constructor(private http:HttpClient) { }

  //api login
  login(){
  return this.http.get(`${this.base_url}/admin`)
  }

}
