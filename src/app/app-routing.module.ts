import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { PimpMyCouchComponent } from './pages/pimp-my-couch/pimp-my-couch.component';


const routes: Routes = [
  {path: '', component: PimpMyCouchComponent}
=======
import { JourneyComponent } from './pages/journey/journey.component';
import { HomepageComponent } from './pages/homepage/homepage.component';


const routes: Routes = [
  {path: 'journey', component: JourneyComponent},
  {path: '', component: HomepageComponent},
>>>>>>> feat/journeyCSS
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
