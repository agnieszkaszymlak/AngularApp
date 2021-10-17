/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RankingsService {

  constructor() { }
}*/

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RankingsService {

  constructor(private http:HttpClient) { }
  getData()
  {
    let url="https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2021&sort=asc";
    return this.http.get(url);
  }
}
