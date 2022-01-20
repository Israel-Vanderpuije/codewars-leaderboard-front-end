import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/models/profile';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getAllUserProfile(): Observable<Profile[]>{
    //use http client
    return this.http.get<Profile[]>(`${this.apiServerUrl}`);
  }

  getAllUserProfileByLanguage(): Observable<any>{
    //use http client
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/users`);
  }

  addProfile(username: any): Observable<Profile>{
    //use http client
    return this.http.post<any>(`${this.apiServerUrl}/profile/add`, username);
  }

}
