import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-ethernet',
  templateUrl: './ethernet.component.html',
  styleUrls: ['./ethernet.component.css']
})
export class EthernetComponent implements OnInit {

  visibilityip: boolean;
  visibilitydns: boolean;

  constructor(private data: DataService) {
    this.visibilityip = true;
    this.visibilitydns = true;
  }

  ngOnInit() {
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
  trackingIP(event: any) {
    this.data.changeEthernetIPaddress(event.target.value);
  }
  trackingMask(event: any) {
    this.data.changeEthernetMask(event.target.value);
  }
  trackingGateway(event: any) {
    this.data.changeEthernetGateway(event.target.value);
  }
  trackingDNSpref(event: any) {
    this.data.changeEthernetDNSpref(event.target.value);
  }
  trackingDNSalter(event: any) {
    this.data.changeEthernetDNSalter(event.target.value);
  }
}
