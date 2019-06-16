import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EthernetComponent } from './ethernet/ethernet.component';
import { WifiComponent } from './wifi/wifi.component';
import { AcceptComponent } from './accept/accept.component';

@NgModule({
  declarations: [
    AppComponent,
    EthernetComponent,
    WifiComponent,
    AcceptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
