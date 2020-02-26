import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrganizacionComponent } from './organizacion/organizacion.component';
import { OrganizacionesComponent } from './organizaciones/organizaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    OrganizacionComponent,
    OrganizacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
