import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    username: string = "";
    language: string = "";

  constructor(private profileService: UserService) { }

  ngOnInit(): void {
  }

 
  addUser(){
    const payload = this.username;
    this.profileService.addProfile(payload).subscribe(
      error => {
        console.log(error)
      },
      success => {
        console.log(success)
      }
    )
  }

  sortByLanguage(){
    const payload = {
      "id" : this.language
    }
    this.profileService.getAllUserProfileByLanguage(payload).subscribe(
      error => {
        console.log(error)
      },
      success => {
        console.log(success)
      }
    )
  }

}
