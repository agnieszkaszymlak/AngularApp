import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingRoutingModule } from './ranking-routing.module';
import { RankingComponent} from './ranking.component';

import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
      RankingComponent
  ],
  imports: [
    CommonModule,
    RankingRoutingModule,
    HttpClientModule
  ]
})
export class RankingModule { }
