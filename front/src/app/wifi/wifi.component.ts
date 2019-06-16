import { Component, OnInit } from '@angular/core';

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
  constructor() {
    this.visibility = true;
    this.visibilitykey = true;
    this.visibilityip = true;
    this.visibilitydns = true;
  }

  ngOnInit() {
  }

  toggleMain(){
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

  toggleKey(){
    this.visibilitykey = !this.visibilitykey;
  }
}
