import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Navigation } from 'selenium-webdriver';

@Component({
  selector: 'app-ethernet',
  templateUrl: './ethernet.component.html',
  styleUrls: ['./ethernet.component.css']
})
export class EthernetComponent implements OnInit {

  ip: string;
  mask: string;
  gateway: string;
  prefDNS: string;
  alterDNS: string;
  visibilityip: boolean;
  checkip: boolean;
  uncheckip: boolean;
  visibilitydns: boolean;
  checkdns: boolean;
  uncheckdns: boolean;

  constructor(private data: DataService) {
    this.visibilityip = true;
    this.visibilitydns = true;
  }

  ngOnInit() {
    this.data.changeEthernetEnableIP('false');
    this.data.changeEthernetEnableDNS('false');
    fetch('/api/ethernet', { method: 'GET', headers: {'Content-Type': 'application/json'}})
    .then((res) => res.json())
    .then((data) => {
      if (data.IPaddress === 'auto') {
        this.checkip = true;
        this.ip = '';
        this.data.changeEthernetIPaddress('');
        this.mask = '';
        this.data.changeEthernetMask('');
        this.gateway = '';
        this.data.changeEthernetGateway('');
      } else {
        this.uncheckip = true;
        this.removeBlockIP();
        this.ip = data.IPaddress;
        this.data.changeEthernetIPaddress(data.IPaddress);
        this.mask = data.mask;
        this.data.changeEthernetMask(data.mask);
        if (data.gateway === 'auto') {
          this.gateway = '';
          this.data.changeEthernetGateway('');
        } else {
          this.gateway = data.gateway;
          this.data.changeEthernetGateway(data.gateway);
        }
      }
      if (data.prefDNSserver === 'auto') {
        this.checkdns = true;
        this.prefDNS = '';
        this.data.changeEthernetDNSpref('');
        this.alterDNS = '';
        this.data.changeEthernetDNSalter('');
      } else {
        this.removeBlockDNS();
        this.uncheckdns = true;
        this.prefDNS = data.prefDNSserver;
        this.data.changeEthernetDNSpref(data.prefDNSserver);
        if (data.alterDNSserver !== 'auto')  {
          this.alterDNS = data.alterDNSserver;
          this.data.changeEthernetDNSalter(data.alterDNSserver);
        } else {
          this.alterDNS = '';
          this.data.changeEthernetDNSalter('');
        }
      }
    })
    .catch(() => {
      this.checkip = true;
      this.checkdns = true;
    });
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
