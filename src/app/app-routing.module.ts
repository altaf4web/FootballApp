import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeagueComponent } from './league/league.component';
import { LeagueTableComponent } from './league-table/league-table.component';

const routes: Routes = [
  {path:'leagues', component: LeagueComponent},
  {path: 'league-standing/:id' , component: LeagueTableComponent},
  { path: '',   redirectTo: '/leagues', pathMatch: 'full' }, // redirect to `first-component`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }