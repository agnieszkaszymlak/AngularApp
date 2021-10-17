import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component'
//import { RankingComponent } from './components/ranking/ranking.component'
import { Error404Component } from './components/error404/error404.component'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'

const routes: Routes = [
  { path: '', component: MainComponent },
  //{ path: 'ranking', component: RankingComponent  },
  { path: 'ranking', loadChildren : () => import('./components/ranking/ranking.module').then(m => m.RankingModule)},

  { path: '**', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }