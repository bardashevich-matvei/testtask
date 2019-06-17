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
    this.data.changeEthernetEnableIP('false');
    this.data.changeEthernetEnableDNS('false');
  }

  addBlockIP() {
    this.visibilityip = true;
    this.data.changeEthernetEnableIP('false');
  }
  removeBlockIP() {
    this.visibilityip = false;
    this.data.changeEthernetEnableIP('true');
  }

  addBlockDNS() {
    this.visibilitydns = true;
    this.data.changeEthernetEnableDNS('false');
  }
  removeBlockDNS() {
    this.visibilitydns = false;
    this.data.changeEthernetEnableDNS('true');
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
