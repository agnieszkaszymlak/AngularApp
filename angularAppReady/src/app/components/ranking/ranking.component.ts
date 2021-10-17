import { Component, OnInit } from '@angular/core';
import { RankingsService } from './rankings.service'


@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  title = 'angular-app';
  data:any=[]
  constructor(private ranking:RankingsService)
  {
    this.ranking.getData().subscribe(data=>{
      console.warn(data)
      this.data=Object.values(data)
    })
}

  ngOnInit(): void {
  }

}