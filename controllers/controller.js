const ethernet = require('../models/ethernet').ethernet;
const wifi = require('../models/wifi').wifi;

exports.addSettings = function(req, res) {
    if ((req.body.ethernetIPaddress === '' || validate(req.body.ethernetIPaddress)) && (req.body.ethernetMask === '' || validate(req.body.ethernetMask)) && (req.body.ethernetGateway === '' || validate(req.body.ethernetGateway))) {
        if ((req.body.ethernetDNSpref === '' || validate(req.body.ethernetDNSpref)) && (req.body.ethernetDNSalter === '' || validate(req.body.ethernetDNSalter))) {
            if ((req.body.wifiIPaddress === '' || validate(req.body.wifiIPaddress)) && (req.body.wifiMask === '' || validate(req.body.wifiMask)) && (req.body.wifiGateway === '' || validate(req.body.wifiGateway))) {
                if ((req.body.wifiDNSpref === '' || validate(req.body.wifiDNSpref)) && (req.body.wifiDNSalter === '' || validate(req.body.wifiDNSalter))) {
                    let ip = req.body.ethernetIPaddress ? req.body.ethernetIPaddress : 'auto';
                    let mask = req.body.ethernetMask ? req.body.ethernetMask : 'auto';
                    let gateway = req.body.ethernetGateway ? req.body.ethernetGateway : 'auto';
                    let prefDNS = req.body.ethernetDNSpref ? req.body.ethernetDNSpref : 'auto';
                    let alterDNS = req.body.ethernetDNSalter ? req.body.ethernetDNSalter : 'auto';
                    
                    let wifiName = req.body.wifiName ? req.body.wifiName : 'auto';
                    let wifiKey = req.body.wifiName ? req.body.wifiKey : 'auto';
                    let wifiIp = req.body.wifiIPaddress ? req.body.wifiIPaddress : 'auto';
                    let wifiMask = req.body.wifiMask ? req.body.wifiMask : 'auto';
                    let wifiGateway = req.body.wifiGateway ? req.body.wifiGateway : 'auto';
                    let wifiPrefDNS = req.body.wifiDNSpref ? req.body.wifiDNSpref : 'auto';
                    let wifiAlterDNS = req.body.wifiDNSalter ? req.body.wifiDNSalter : 'auto';
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

exports.getLastEthernetSettings = function(req, res) {
    ethernet.find({}, function(err, result) {
        if (err) {
            console.log(err);
            res.json(err)
        } else res.json(result[result.length - 1]);
    });
}

exports.getLastWifiSettings = function(req, res) {
    wifi.find({}, function(err, result) {
        if (err) {
            console.log(err);
            res.json(err)
        } else res.json(result[result.length - 1]);
    });
}

function validate(ipaddress) {
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
        return true;
    } else {
        return false;
    }
}