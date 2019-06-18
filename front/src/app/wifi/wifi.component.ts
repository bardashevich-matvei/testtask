import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-wifi',
  templateUrl: './wifi.component.html',
  styleUrls: ['./wifi.component.css']
})
export class WifiComponent implements OnInit {

  visibilitykey: boolean;
  visibility: boolean;
  visibilityip: boolean;
  visibilitydns: boolean;
  constructor(private data: DataService) {
    this.visibility = true;
    this.visibilitykey = true;
    this.visibilityip = true;
    this.visibilitydns = true;
  }

  ngOnInit() {
    this.data.changeWifiEnable('false');
    this.data.changeWifiEnableKey('false');
    this.data.changeWifiEnableIP('false');
    this.data.changeWifiEnableDNS('false');
  }

  toggleMain() {
    this.data.changeWifiEnable(this.visibility.toString());
    this.visibility = !this.visibility;
  }

  addBlockIP() {
    this.visibilityip = true;
    this.data.changeWifiEnableIP('false');
  }
  removeBlockIP() {
    this.visibilityip = false;
    this.data.changeWifiEnableIP('true');
  }

  addBlockDNS() {
    this.visibilitydns = true;
    this.data.changeWifiEnableDNS('false');
  }
  removeBlockDNS() {
    this.visibilitydns = false;
    this.data.changeWifiEnableDNS('true');
  }

  toggleKey() {
    this.data.changeWifiEnableKey(this.visibilitykey.toString());
    this.visibilitykey = !this.visibilitykey;
  }
  trackingName(event: any) {
    this.data.changeWifiName(event.target.value);
  }
  trackingKey(event: any) {
    this.data.changeWifiKey(event.target.value);
  }
  trackingIP(event: any) {
    this.data.changeWifiIPaddress(event.target.value);
  }
  trackingMask(event: any) {
    this.data.changeWifiMask(event.target.value);
  }
  trackingGateway(event: any) {
    this.data.changeWifiGateway(event.target.value);
  }
  trackingDNSpref(event: any) {
    this.data.changeWifiDNSpref(event.target.value);
  }
  trackingDNSalter(event: any) {
    this.data.changeWifiDNSalter(event.target.value);
  }
}
