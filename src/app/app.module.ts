import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user/user.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SortTableComponent } from './sort-table/sort-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableComponent,
    SortTableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: TableComponent},
      {path: 'sort-table', component: SortTableComponent}
    ]),
  ],
  providers: [UserService, TableComponent, NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
