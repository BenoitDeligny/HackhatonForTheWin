import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JourneyComponent } from './pages/journey/journey.component';


const routes: Routes = [
  {path: 'journey', component: JourneyComponent},
  {path: '', component: JourneyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
