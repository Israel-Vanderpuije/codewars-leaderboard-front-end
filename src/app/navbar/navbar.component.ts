import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profile';
import { UserService } from '../services/user/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    username: string = "";
    lang: string = "";
    sortedProfiles: Profile[] = []
  
  constructor(private profileService: UserService) { }

  ngOnInit(): void {
    
  }

  addUser(){
    const payload = this.username;
    this.profileService.addProfile(payload).subscribe(
      error => {
        console.log(error);
      },
      success => {
        console.log(success)
      }
    )
  }

 sortByLanguage(){
    const language = this.lang
    this.profileService.getAllUserProfileByLanguage(language.toLowerCase()).subscribe(
      (response: Profile[]) => {
        this.sortedProfiles = response
        this.profileService.setSortedProfilesByLanguage(response)
        console.log(response)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
