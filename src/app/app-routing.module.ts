import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetListComponent } from './components/planet/planet-list/planet-list.component';
import { PlanetIndexComponent } from './components/planet/planet-index/planet-index.component';
import { PlanetInfoComponent } from './components/planet/planet-info/planet-info.component';

const routes: Routes = [{
  path: '',

  children: [
    { path: '', component: PlanetIndexComponent },
    { path: 'planet/list', component: PlanetListComponent },
    { path: 'planet/info/:id', component: PlanetInfoComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
