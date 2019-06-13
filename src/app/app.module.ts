import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetListComponent } from './components/planet/planet-list/planet-list.component';
import { PlanetIndexComponent } from './components/planet/planet-index/planet-index.component';
import { MaterialModule } from './material';
import { PlanetInfoComponent } from './components/planet/planet-info/planet-info.component';
import '../app/_helpers/extensions/string.format';
import { appReducers } from './reducers/app.reducers';
import { PlanetEffects } from './effects/planet.effects';
import { environment } from 'src/environments/environment';
import { PlanetContainerComponent } from './components/planet/containers/planet-container/planet-container.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetListComponent,
    PlanetIndexComponent,
    PlanetInfoComponent,
    PlanetContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([PlanetEffects]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    !environment.production ? StoreDevtoolsModule.instrument()  : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
