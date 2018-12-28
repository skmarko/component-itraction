import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FCComponent } from './f-c/f-c.component';
import { SCComponent } from './s-c/s-c.component';

@NgModule({
  declarations: [
    AppComponent,
    FCComponent,
    SCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
