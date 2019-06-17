import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    private messageEthernetIPaddress = new BehaviorSubject<string>('');
    ethernetIPaddress = this.messageEthernetIPaddress.asObservable();
    private messageEthernetMask = new BehaviorSubject<string>('');
    ethernetMask = this.messageEthernetMask.asObservable();
    private messageEthernetGateway = new BehaviorSubject<string>('');
    ethernetGateway = this.messageEthernetGateway.asObservable();
    private messageEthernetDNSpref = new BehaviorSubject<string>('');
    ethernetDNSpref = this.messageEthernetDNSpref.asObservable();
    private messageEthernetDNSalter = new BehaviorSubject<string>('');
    ethernetDNSalter = this.messageEthernetDNSalter.asObservable();
    private messageWifiName = new BehaviorSubject<string>('');
    wifiName = this.messageWifiName.asObservable();
    private messageWifiKey = new BehaviorSubject<string>('');
    wifiKey = this.messageWifiKey.asObservable();
    private messageWifiIPaddress = new BehaviorSubject<string>('');
    wifiIPaddress = this.messageWifiIPaddress.asObservable();
    private messageWifiMask = new BehaviorSubject<string>('');
    wifiMask = this.messageWifiMask.asObservable();
    private messageWifiGateway = new BehaviorSubject<string>('');
    wifiGateway = this.messageWifiGateway.asObservable();
    private messageWifiDNSpref = new BehaviorSubject<string>('');
    wifiDNSpref = this.messageWifiDNSpref.asObservable();
    private messageWifiDNSalter = new BehaviorSubject<string>('');
    wifiDNSalter = this.messageWifiDNSalter.asObservable();

    constructor() {}

    changeEthernetIPaddress(s: string) {
        this.messageEthernetIPaddress.next(s);
    }
    changeEthernetMask(s: string) {
        this.messageEthernetMask.next(s);
    }
    changeEthernetGateway(s: string) {
        this.messageEthernetGateway.next(s);
    }
    changeEthernetDNSpref(s: string) {
        this.messageEthernetDNSpref.next(s);
    }
    changeEthernetDNSalter(s: string) {
        this.messageEthernetDNSalter.next(s);
    }
    changeWifiName(s: string) {
        this.messageWifiName.next(s);
    }
    changeWifiKey(s: string) {
        this.messageWifiKey.next(s);
    }
    changeWifiIPaddress(s: string) {
        this.messageWifiIPaddress.next(s);
    }
    changeWifiMask(s: string) {
        this.messageWifiMask.next(s);
    }
    changeWifiGateway(s: string) {
        this.messageWifiGateway.next(s);
    }
    changeWifiDNSpref(s: string) {
        this.messageWifiDNSpref.next(s);
    }
    changeWifiDNSalter(s: string) {
        this.messageWifiDNSalter.next(s);
    }
}
