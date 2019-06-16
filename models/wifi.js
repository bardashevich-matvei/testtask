const orm = require('orm').connect('mysql://root:root@localhost/testtask');

exports.wifi = orm.define('user', {
    idwifi: {type: 'serial', key: true},
    enable: Number,
    name: String,
    securitykey: String,
    IPaddress: String,
    mask: String,
    gateway: String,
    prefDNSserver: String,
    alterDNSserver: String,
    enableIP: Number,
    enableDNS: Number
});;