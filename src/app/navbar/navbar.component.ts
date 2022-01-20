import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    title = 'Codewars Leaderboard';
    username: string = "";

  constructor(private profileService: UserService) { }

  ngOnInit(): void {
  }

  addUser(){
    const payload = {
      "id" : this.username
    }
    this.profileService.addProfile(payload).subscribe(
      error => {
        console.log(error)
      },
      success => {
        console.log(success)
      }
    )
  }

}
