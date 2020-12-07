import { ApiService } from '../api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.css']
})
export class LeagueTableComponent implements OnInit {
  leagueID: string;
  id: string
  // leagues: any = [];
  leagues : any = [];
  displayedColumns: string[] = ['Position', 'Club', 'MP', 'W', 'D', 'L', 'GF', 'GA', 'GD', 'PTS', 'LAST 5' ];
  
  constructor(private apiService : ApiService, private route: ActivatedRoute){
     this.id = route.snapshot.params.id;
  }
  ngOnInit(): void {
    this.leagueID = this.id;
    console.log(this.id);
    this.apiService.getLeagueTable(this.leagueID).subscribe((data)=>{
      console.log(data);
      this.leagues = data;
      
    });
  }
}
