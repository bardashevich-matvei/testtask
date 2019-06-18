const ethernet = require('../models/ethernet').ethernet;
const wifi = require('../models/wifi').wifi;

exports.addSettings = function(req, res) {
    if ((req.body.ethernetIPaddress === '' || validate(req.body.ethernetIPaddress)) && (req.body.ethernetMask === '' || validate(req.body.ethernetMask)) && (req.body.ethernetGateway === '' || validate(req.body.ethernetGateway))) {
        if ((req.body.ethernetDNSpref === '' || validate(req.body.ethernetDNSpref)) && (req.body.ethernetDNSalter === '' || validate(req.body.ethernetDNSalter))) {
            if ((req.body.wifiIPaddress === '' || validate(req.body.wifiIPaddress)) && (req.body.wifiMask === '' || validate(req.body.wifiMask)) && (req.body.wifiGateway === '' || validate(req.body.wifiGateway))) {
                if ((req.body.wifiDNSpref === '' || validate(req.body.wifiDNSpref)) && (req.body.wifiDNSalter === '' || validate(req.body.wifiDNSalter))) {
                    let ip = req.body.ethernetIPaddress ? 'auto' : req.body.ethernetIPaddress;
                    let mask = req.body.ethernetMask ? 'auto' : req.body.ethernetMask;
                    let gateway = req.body.ethernetGateway ? 'auto' : req.body.ethernetGateway;
                    let prefDNS = req.body.ethernetDNSpref ? 'auto' : req.body.ethernetDNSpref;
                    let alterDNS = req.body.ethernetDNSalter ? 'auto' : req.body.ethernetDNSalter;
                    
                    let wifiName = req.body.wifiName ? 'auto' : req.body.wifiName;
                    let wifiKey = req.body.wifiName ? 'auto' : req.body.wifiKey;
                    let wifiIp = req.body.wifiIPaddress ? 'auto' : req.body.wifiIPaddress;
                    let wifiMask = req.body.wifiMask ? 'auto' : req.body.wifiMask;
                    let wifiGateway = req.body.wifiGateway ? 'auto' : req.body.wifiGateway;
                    let wifiPrefDNS = req.body.wifiDNSpref ? 'auto' : req.body.wifiDNSpref;
                    let wifiAlterDNS = req.body.wifiDNSalter ? 'auto' : req.body.wifiDNSalter;
                    ethernet.create({IPaddress: ip, mask: mask, gateway: gateway, prefDNSserver: prefDNS, alterDNSserver: alterDNS}, (err, result) => {
                        if (err) {
                            console.log(err);
                            res.json(err);
                        } else wifi.create({name: wifiName, securitykey: wifiKey, IPaddress: wifiIp, mask: wifiMask, gateway: wifiGateway, prefDNSserver: wifiPrefDNS, alterDNSserver: wifiAlterDNS}, (err) => {
                            if (err) {
                                console.log(err);
                                res.json(err);
                            } else res.status(200).json();
                        });
                    });
                } else {
                    res.status(412).json();
                }
            } else {
                res.status(412).json();
            }
        } else {
            res.status(412).json();
        }
    } else {
        res.status(412).json();
    }
}

exports.getLastSettings = function(req, res) {

}

function validate(ipaddress) {
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
        return true;
    } else {
        return false;
    }
}