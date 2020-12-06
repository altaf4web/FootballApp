import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {
  // leagues: any[];
  leagues: any = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.apiService.getLeague().subscribe((data)=>{
      this.leagues = data;
    });


  }

}
