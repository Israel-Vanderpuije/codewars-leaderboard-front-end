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
  sortedProfilesByLanguage: Profile[] = []
  message:string=""

  constructor(private http: HttpClient) { }

  setMessage(DATA: any){
    this.message
  }

  getMessage(){
    return this.message
  }


  //////////////
  setSortedProfilesByLanguage(data: any){
    this.sortedProfilesByLanguage = data;
  }

  getSortedProfilesByLanguage(){
    return this.sortedProfilesByLanguage;
  }

  getAllUserProfile(): Observable<Profile[]>{
    //use http client
    return this.http.get<Profile[]>(`${this.apiServerUrl}`);
  }

  getAllUserProfileByLanguage(language: any): Observable<Profile[]>{
    //use http client
    return this.http.get<Profile[]>(`${this.apiServerUrl}/language/${language}`);
  }

  addProfile(payload: any): Observable<Profile>{
    //use http client
    return this.http.post<any>(`${this.apiServerUrl}/add-user`, payload);
  }

}
