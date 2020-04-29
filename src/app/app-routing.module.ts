import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PimpMyCouchComponent } from './pages/pimp-my-couch/pimp-my-couch.component';


const routes: Routes = [
  {path: '', component: PimpMyCouchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
