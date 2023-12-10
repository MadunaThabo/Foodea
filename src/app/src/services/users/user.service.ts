import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';
import { UserModel } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  apiUrl = 'https://localhost:7008/api/users';

  constructor(public httpClient: HttpClient) {

  }

  login(email: string, password: string): Observable<UserModel | Error> {
    const loginData = {
      email: email,
      password: password
    };
    const loginUrl = `${this.apiUrl}/login`;

    return this.httpClient.post<UserModel>(loginUrl, loginData).pipe(
      catchError((error) => {
        // Handle specific errors based on status code or error object
        if (error.status === 401) {
          return of(new Error('Invalid username or password.'));
        } else if (error.status === 500) {
          return of(new Error('Internal server error, please try again later.'));
        }
        // Return generic error message for unknown errors
        return of(new Error('An error occurred, please try again later.'));
      })
    );
  }

}

