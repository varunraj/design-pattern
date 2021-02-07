// this is the scoute prototye object which we will use to create other object


var Shopper = require('./Shopper');

var scout = new Shopper();
scout.addItemToList('camping knife');
scout.addItemToList('tent');
scout.addItemToList('backpack');
scout.addItemToList('map');

module.exports = scout;
