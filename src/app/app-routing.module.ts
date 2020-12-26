import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/./heroes.component';
import { DashboardComponent } from './dashboard/./dashboard.component';
import { HeroDetailComponent } from './hero-detail/./hero-detail.component';
import { NotfoundComponent } from './notfound/./notfound.component';
import {ListsComponent} from './lists/./lists.component';
import {DetailsComponent} from './details/./details.component';
const routes: Routes = [
  {path:"",redirectTo:"/dashboard",pathMatch:"full"},
  {path:"heroes",component:HeroesComponent},
  {path:"detail/:id",component:DetailsComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"herodetail",component:HeroDetailComponent},
  {path:"**",component:NotfoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }