import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
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
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.getTableData()
  }

  getTableData() {
    //Use service to get data
    //ELEMENT_DATA = data
    // this.userService.getUserData()

  }

}
