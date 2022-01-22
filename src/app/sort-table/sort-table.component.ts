import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profile';
import { UserService } from '../services/user/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sort-table',
  templateUrl: './sort-table.component.html',
  styleUrls: ['./sort-table.component.css']
})
export class SortTableComponent implements OnInit {
  
  sortedProfiles: Profile[] = [];

  constructor(private profileService: UserService) { }

  ngOnInit(): void {
      this.sortedProfiles = this.profileService.getSortedProfilesByLanguage()
  }

}
