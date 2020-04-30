import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PimpMyCouchComponent } from './pages/pimp-my-couch/pimp-my-couch.component';
import { JourneyComponent } from './pages/journey/journey.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  {path: 'journey', component: JourneyComponent},
  {path: 'pimped', component: PimpMyCouchComponent},
  {path: '', component: HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
