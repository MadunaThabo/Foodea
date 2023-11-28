import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://localhost:7008/api/Users';
  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const loginData = {
      email: email,
      password: password
    };

    // Assuming your backend has an endpoint for login, adjust the URL accordingly
    const loginUrl = `${this.apiUrl}/login`;

    return this.httpClient.post(loginUrl, loginData);
  }


  addSuperPower(superpower: any){
    let url = 'http://localhost:8080/api/v3/superpowers';
    return this.httpClient.post<any>(url, superpower);
  }



}

