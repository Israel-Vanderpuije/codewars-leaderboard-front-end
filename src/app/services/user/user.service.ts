import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/profile';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = '';

  constructor(private http: HttpClient) { }

  getAllUserProfile(): Observable<Profile[]>{
    //use http client
    return this.http.get<Profile[]>(`${this.apiServerUrl}/get/all`);
  }

  getAllUserProfileByLanguage(): Observable<Profile[]>{
    //use http client
    return this.http.get<Profile[]>(`${this.apiServerUrl}/get/all`);
  }

  addProfile(profile: Profile): Observable<Profile>{
    //use http client
    return this.http.post<Profile>(`${this.apiServerUrl}/profile/add`, profile);
  }

}
