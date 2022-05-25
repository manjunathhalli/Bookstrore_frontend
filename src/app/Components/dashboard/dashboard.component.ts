import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/DataService/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private data: DataService,private router: Router,) { }

  ngOnInit(): void {
  }
  search(event:any){
    console.log(event.target.value)
    // this.data.updateSearch(event.target.value);
    this.data.outgoingData(event.target.value)
  }

  signOut() {
    localStorage.removeItem("BookStore");
    this.router.navigateByUrl('/login');
  }
}
