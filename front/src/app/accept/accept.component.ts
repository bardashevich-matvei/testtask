import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { element } from 'protractor';
import { TouchSequence } from 'selenium-webdriver';
import { settings } from 'cluster';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.css']
})
export class AcceptComponent implements OnInit {

  ethernetEnableIP: string;
  ethernetEnableDNS: string;
  ethernetIPaddress: string;
  ethernetMask: string;
  ethernetGateway: string;
  ethernetDNSpref: string;
  ethernetDNSalter: string;

  wifiEnable: string;
  wifiEnableKey: string;
  wifiEnableIP: string;
  wifiEnableDNS: string;
  wifiName: string;
  wifiKey: string;
  wifiIPaddress: string;
  wifiMask: string;
  wifiGateway: string;
  wifiDNSpref: string;
  wifiDNSalter: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.ethernetEnableIP.subscribe(message => this.ethernetEnableIP = message);
    this.data.ethernetEnableDNS.subscribe(message => this.ethernetEnableDNS = message);
    this.data.ethernetIPaddress.subscribe(message => this.ethernetIPaddress = message);
    this.data.ethernetMask.subscribe(message => this.ethernetMask = message);
    this.data.ethernetGateway.subscribe(message => this.ethernetGateway = message);
    this.data.ethernetDNSpref.subscribe(message => this.ethernetDNSpref = message);
    this.data.ethernetDNSalter.subscribe(message => this.ethernetDNSalter = message);

    this.data.wifiEnable.subscribe(message => this.wifiEnable = message);
    this.data.wifiEnableKey.subscribe(message => this.wifiEnableKey = message);
    this.data.wifiEnableIP.subscribe(message => this.wifiEnableIP = message);
    this.data.wifiEnableDNS.subscribe(message => this.wifiEnableDNS = message);
    this.data.wifiName.subscribe(message => this.wifiName = message);
    this.data.wifiKey.subscribe(message => this.wifiKey = message);
    this.data.wifiIPaddress.subscribe(message => this.wifiIPaddress = message);
    this.data.wifiMask.subscribe(message => this.wifiMask = message);
    this.data.wifiGateway.subscribe(message => this.wifiGateway = message);
    this.data.wifiDNSpref.subscribe(message => this.wifiDNSpref = message);
    this.data.wifiDNSalter.subscribe(message => this.wifiDNSalter = message);
  }

  apply(): void {
    if ((this.ethernetEnableIP === 'true' && this.ethernetIPaddress !== '' && this.ethernetMask !== '') || this.ethernetEnableIP === 'false') {
      if ((this.ethernetEnableDNS === 'true' && this.ethernetDNSpref !== '') || this.ethernetEnableDNS === 'false') {
        if ((this.wifiEnable === 'true' && this.wifiName !== '') || this.wifiEnable === 'false') {
          if ((this.wifiEnableKey === 'true' && this.wifiKey !== '') || this.wifiEnableKey === 'false') {
            if ((this.wifiEnableIP === 'true' && this.wifiIPaddress !== '' && this.wifiMask !== '') || this.wifiEnableIP === 'false') {
              if ((this.wifiEnableDNS === 'true' && this.wifiDNSpref !== '') || this.wifiEnableDNS === 'false') {
                const settings: any = {};
                if (this.ethernetEnableIP === 'true') {
                  settings.ethernetIPaddress = this.ethernetIPaddress;
                  settings.ethernetMask = this.ethernetMask;
                  settings.ethernetGateway = this.ethernetGateway;
                } else {
                  settings.ethernetIPaddress = '';
                  settings.ethernetMask = '';
                  settings.ethernetGateway = '';
                }
                if (this.ethernetEnableDNS === 'true') {
                  settings.ethernetDNSpref = this.ethernetDNSpref;
                  settings.ethernetDNSalter = this.ethernetDNSalter;
                } else {
                  settings.ethernetDNSpref = '';
                  settings.ethernetDNSalter = '';
                }
                if (this.wifiEnable === 'true') {
                  settings.wifiName = this.wifiName;
                  if (this.wifiEnableIP === 'true') {
                    settings.wifiIPaddress = this.wifiIPaddress;
                    settings.wifiMask = this.wifiMask;
                    settings.wifiGateway = this.wifiGateway;
                  } else {
                    settings.wifiIPaddress = '';
                    settings.wifiMask = '';
                    settings.wifiGateway = '';
                  }
                  if (this.wifiEnableDNS === 'true') {
                    settings.wifiDNSpref = this.wifiDNSpref;
                    settings.wifiDNSalter = this.wifiDNSalter;
                  } else {
                    settings.wifiDNSpref = '';
                    settings.wifiDNSalter = '';
                  }
                  if (this.wifiEnableKey === 'true') {
                    settings.wifiKey = this.wifiKey;
                  } else {
                    settings.wifiKey = '';
                    settings.wifiIPaddress = '';
                    settings.wifiMask = '';
                    settings.wifiGateway = '';
                    settings.wifiDNSpref = '';
                    settings.wifiDNSalter = '';
                  }
                } else {
                  settings.wifiName = '';
                  settings.wifiKey = '';
                  settings.wifiIPaddress = '';
                  settings.wifiMask = '';
                  settings.wifiGateway = '';
                  settings.wifiDNSpref = '';
                  settings.wifiDNSalter = '';
                }
                fetch('/api/', { method: 'POST',
                             headers: {'Content-Type': 'application/json'},
                             body: JSON.stringify(settings)})
                .then((res) => {
                  if (res.status === 200) {
                    alert('Настройки сохраненны успешно!');
                  } else if (res.status === 412) {
                    alert('Ошибка! Введены неверные данные');
                  }
                });
              } else {
                alert('Введите, пожалуйста, Prefered DNS server в Wifi Settings');
              }
            } else {
              alert('Введите, пожалуйста, IP-address и/или Subnet Mask в Wifi Settings');
            }
          } else {
            alert('Введите, пожалуйста, Security Key server в Wifi Settings');
          }
        } else {
          alert('Выбирете, пожалуйста, Wireless Network Name в Wifi Settings');
        }
      } else {
        alert('Введите, пожалуйста, Prefered DNS server в Ethernet Settings');
      }
    } else {
      alert('Введите, пожалуйста, IP-address и/или Subnet Mask в Ethernet Settings');
    }
  }
}
