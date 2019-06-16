import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-ethernet',
  templateUrl: './ethernet.component.html',
  styleUrls: ['./ethernet.component.css']
})
export class EthernetComponent implements OnInit {

  iPaddress: string;
  mask: string;
  gateway: string;
  prefdns: string;
  alterdns: string;
  visibilityip: boolean;
  visibilitydns: boolean;

  constructor() {
    this.iPaddress = 'auto';
    this.mask = 'auto';
    this.gateway = 'auto';
    this.prefdns = 'auto';
    this.alterdns = 'auto';
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
}
