import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/models/profile';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = environment.apiBaseUrl;
  private lan = NavbarComponent

  constructor(private http: HttpClient) { }

  getAllUserProfile(): Observable<Profile[]>{
    //use http client
    return this.http.get<Profile[]>(`${this.apiServerUrl}`);
  }

  getAllUserProfileByLanguage(language: any): Observable<any>{
    //use http client
    return this.http.get<any>(`${this.apiServerUrl}/language/${language}`);
  }

  addProfile(payload: any): Observable<Profile>{
    //use http client
    return this.http.post<any>(`${this.apiServerUrl}/add-user`, payload);
  }

}
