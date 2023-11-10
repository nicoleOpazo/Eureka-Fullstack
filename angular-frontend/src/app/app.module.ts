import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PersonasAreasModule } from './personas-areas/personas-areas.module';
import { SharedModule } from './shared/shared.module';

import { AreaService } from './personas-areas/services/area.service';
import { PersonaService } from './personas-areas/services/persona.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PersonasAreasModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    AreaService,
    PersonaService
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
