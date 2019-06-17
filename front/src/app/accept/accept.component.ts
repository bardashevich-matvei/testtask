import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.css']
})
export class AcceptComponent implements OnInit {

  ethernetIPaddress: string;
  ethernetMask: string;
  ethernetGateway: string;
  ethernetDNSpref: string;
  ethernetDNSalter: string;

  wifiName: string;
  wifiKey: string;
  wifiIPaddress: string;
  wifiMask: string;
  wifiGateway: string;
  wifiDNSpref: string;
  wifiDNSalter: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.ethernetIPaddress.subscribe(message => this.ethernetIPaddress = message);
    this.data.ethernetMask.subscribe(message => this.ethernetMask = message);
    this.data.ethernetGateway.subscribe(message => this.ethernetGateway = message);
    this.data.ethernetDNSpref.subscribe(message => this.ethernetDNSpref = message);
    this.data.ethernetDNSalter.subscribe(message => this.ethernetDNSalter = message);

    this.data.wifiName.subscribe(message => this.wifiName = message);
    this.data.wifiKey.subscribe(message => this.wifiKey = message);
    this.data.wifiIPaddress.subscribe(message => this.wifiIPaddress = message);
    this.data.wifiMask.subscribe(message => this.wifiMask = message);
    this.data.wifiGateway.subscribe(message => this.wifiGateway = message);
    this.data.wifiDNSpref.subscribe(message => this.wifiDNSpref = message);
    this.data.wifiDNSalter.subscribe(message => this.wifiDNSalter = message);
  }

  apply(): void {
    alert(this.wifiName);
  }
}
