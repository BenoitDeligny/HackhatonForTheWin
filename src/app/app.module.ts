import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PimpMyCouchComponent } from './pages/pimp-my-couch/pimp-my-couch.component';
import { PreferencesComponent } from './pages/preferences/preferences.component';
import { JourneyComponent } from './pages/journey/journey.component';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> feat/journeyCSS

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PimpMyCouchComponent,
    PreferencesComponent,
    JourneyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    DragDropModule
=======
    HttpClientModule,
>>>>>>> feat/journeyCSS
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
