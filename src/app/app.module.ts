import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetListComponent } from './views/planet/planet-list/planet-list.component';
import { PlanetIndexComponent } from './views/planet/planet-index/planet-index.component';
import { MaterialModule } from './material';
import { HttpClientModule } from '@angular/common/http';
import { PlanetInfoComponent } from './views/planet/planet-info/planet-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetListComponent,
    PlanetIndexComponent,
    PlanetInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }