import { HttpErrorResponse } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profile';
import { UserService } from '../services/user/user.service';

interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  public profiles: Profile[] = [];
  
  
  
  displayedColumns: string[] = ['position', 'name', 'username', 'honor', 'rank'];
  dataSource = ELEMENT_DATA;

  constructor(private profileService: UserService) { }

  ngOnInit(): void {
    // this.getTableData()
    this.getProfiles();
  }

  // getTableData() {
  //   //Use service to get data
  //   //ELEMENT_DATA = data
  //   this.profileService.getAllUserProfileByLanguage().subscribe((data) => {
  //         console.log(data);
  //   });
  // }

  getProfiles(): void{
      this.profileService.getAllUserProfile().subscribe(
        (response: Profile[]) => {
          this.profiles = response;
          console.log(response);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );        
    }

}
