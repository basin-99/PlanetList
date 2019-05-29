import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetListComponent } from './components/planet/planet-list/planet-list.component';
import { PlanetIndexComponent } from './components/planet/planet-index/planet-index.component';
import { MaterialModule } from './material';
import { HttpClientModule } from '@angular/common/http';
import { PlanetInfoComponent } from './components/planet/planet-info/planet-info.component';
import '../app/_helpers/extensions/string.format';

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
