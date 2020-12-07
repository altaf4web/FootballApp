import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  AUTH_KEY = 'cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b';
  BASE_URL = `https://data.football-api.com/v3/`;
  http: any;
  constructor(private httpClient: HttpClient) { }

  public getLeague(){
    return this.httpClient.get(this.BASE_URL + `competitions?Authorization=${this.AUTH_KEY}`)
  }
  
  public getLeagueTable(leagueID: string){
    return this.httpClient.get(this.BASE_URL + `standings/${leagueID}?Authorization=${this.AUTH_KEY}`)
  }
  
  // public findCompetationById(leagueID: string){
  //   return this.httpClient.get(this.BASE_URL + `competitions/${leagueID}?Authorization=${this.AUTH_KEY}`)
  // }
  
  
}

// matches list
// https://data.football-api.com/v3/matches?comp_id=1204&from_date=03.09.2020&to_date=01.01.2021&Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b

// https://data.football-api.com/v3/competitions/1204?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b

  // example for news
  // return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);

  // league list
  // https://data.football-api.com/v3/competitions?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b


  // league table by id
  // https://data.football-api.com/v3/competitions/1204?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b

  // league Standing
  // https://data.football-api.com/v3/standings/1204?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b
