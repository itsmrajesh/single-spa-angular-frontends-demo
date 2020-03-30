import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';


const routes: Routes = [
  { path: '', component:HomeComponent,pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'team', component: TeamComponent },
  { path: '**', component: EmptyRouteComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/ipl' },
  ],
})
export class AppRoutingModule { }
