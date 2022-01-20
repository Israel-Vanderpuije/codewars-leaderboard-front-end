import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Profile } from './models/profile';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public profiles: Profile[] = [];

  constructor(private profileService: UserService) { }

  ngOnInit(): void {
      // this.getProfiles();
  }

  // public getProfiles(): void{
  //   this.profileService.getAllUserProfile().subscribe(
  //     (response: Profile[]) => {
  //       this.profiles = response;
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );        
  // }
}
