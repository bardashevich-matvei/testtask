import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-wifi',
  templateUrl: './wifi.component.html',
  styleUrls: ['./wifi.component.css']
})
export class WifiComponent implements OnInit {

  name: string;
  key: string;
  ip: string;
  mask: string;
  gateway: string;
  prefDNS: string;
  alterDNS: string;
  visibilitykey: boolean;
  visibility: boolean;
  visibilityip: boolean;
  visibilitydns: boolean;
  checkwifi: boolean;
  checkwifikey: boolean;
  checkwifiip: boolean;
  uncheckwifiip: boolean;
  checkwifiDNS: boolean;
  uncheckwifiDNS: boolean;
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
    fetch('/api/wifi', { method: 'GET', headers: {'Content-Type': 'application/json'}})
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.name !== 'auto') {
        this.checkwifi = true;
        this.toggleMain();
        this.name = data.name;
        this.data.changeWifiName(data.name);
        if (data.securitykey !== 'auto') {
          this.checkwifikey = true;
          this.toggleKey();
          this.key = data.securitykey;
          this.data.changeWifiName(data.securitykey);
        } else {
          this.key = '';
        }
      } else {
        this.name = 'Please select';
        this.key = '';
      }
      if (data.IPaddress === 'auto') {
        this.checkwifiip = true;
        this.ip = '';
        this.data.changeWifiIPaddress('');
        this.mask = '';
        this.data.changeWifiMask('');
        this.gateway = '';
        this.data.changeWifiGateway('');
      } else {
        this.uncheckwifiip = true;
        this.removeBlockIP();
        this.ip = data.IPaddress;
        this.data.changeWifiIPaddress(data.IPaddress);
        this.mask = data.mask;
        this.data.changeWifiMask(data.mask);
        if (data.gateway === 'auto') {
          this.gateway = '';
          this.data.changeWifiGateway('');
        } else {
          this.gateway = data.gateway;
          this.data.changeWifiGateway(data.gateway);
        }
      }
      if (data.prefDNSserver === 'auto') {
        this.checkwifiDNS = true;
        this.prefDNS = '';
        this.data.changeWifiDNSpref('');
        this.alterDNS = '';
        this.data.changeWifiDNSalter('');
      } else {
        this.removeBlockDNS();
        this.uncheckwifiDNS = true;
        this.prefDNS = data.prefDNSserver;
        this.data.changeWifiDNSpref(data.prefDNSserver);
        if (data.alterDNSserver !== 'auto')  {
          this.alterDNS = data.alterDNSserver;
          this.data.changeWifiDNSalter(data.alterDNSserver);
        } else {
          this.alterDNS = '';
          this.data.changeWifiDNSalter('');
        }
      }
    });
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
