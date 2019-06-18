const orm = require('orm').connect('mysql://root:root@localhost/testtask');

exports.wifi = orm.define('wifi', {
    idwifi: {type: 'serial', key: true},
    name: String,
    securitykey: String,
    IPaddress: String,
    mask: String,
    gateway: String,
    prefDNSserver: String,
    alterDNSserver: String
});;