const orm = require('orm').connect('mysql://root:root@localhost/testtask');

exports.ethernet = orm.define('user', {
    idethernet: {type: 'serial', key: true},
    IPaddress: String,
    mask: String,
    gateway: String,
    prefDNSserver: String,
    alterDNSserver: String,
    enableIP: Number,
    enableDNS: Number
});;