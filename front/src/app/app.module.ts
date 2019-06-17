import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EthernetComponent } from './ethernet/ethernet.component';
import { WifiComponent } from './wifi/wifi.component';
import { AcceptComponent } from './accept/accept.component';
import { DataService } from '../data.service';

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
  providers: [
    EthernetComponent,
    WifiComponent,
    AcceptComponent,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
