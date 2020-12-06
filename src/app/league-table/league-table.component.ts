import { ApiService } from '../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.css']
})
export class LeagueTableComponent implements OnInit {
  leagueID: string;
  // leagues: any = [];
  leagues : any = [];
  displayedColumns: string[] = ['Position', 'Club', 'MP', 'W', 'D', 'L', 'GF', 'GA', 'GD', 'PTS', 'LAST 5' ];
  
  constructor(private apiService : ApiService){}
  
  ngOnInit(): void {
    this.leagueID = "1204";
    this.apiService.getLeagueTable(this.leagueID).subscribe((data)=>{
      console.log(data);
      this.leagues = data;
      
    });
  }

}
// export class LeagueTableComponent implements OnInit {
//   leagueID: string;
//   leagues: any = [];

//   constructor(private apiService: ApiService) { }
  
//   ngOnInit(): void {
//     this.leagueID = "1204";
//     this.apiService.getLeagueTable(this.leagueID).subscribe((data)=>{
//       console.log(data);
//       this.leagues = data;
//     });
//     }

// }

