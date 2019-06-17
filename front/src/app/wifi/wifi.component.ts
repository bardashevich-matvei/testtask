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
  }

  toggleMain() {
    this.visibility = !this.visibility;
  }

  addBlockIP() {
    this.visibilityip = true;
  }
  removeBlockIP() {
    this.visibilityip = false;
  }

  addBlockDNS() {
    this.visibilitydns = true;
  }
  removeBlockDNS() {
    this.visibilitydns = false;
  }

  toggleKey() {
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
