// we create Shopper and Employee using it classes. But as application grws, we will have so many constructor calls from this files
// to create shopper, employee, distributor, etc. That is where factory pattern can help

var Shopper = require('./Shopper');
var Employee = require('./Employee');

var alex = new Shopper('Alex Banks', 100);
var eve = new Employee('Eve Porcello', 100, 'This and That');

console.log( alex.toString() )
console.log( eve.toString() )
