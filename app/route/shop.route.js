module.exports = function (app) {

    const shop = require('../controller/shop.controller');
    // const user = require('../controller/user.controller');

    app.get('/shopify', shop.install);

    app.get('/shopify/callback', shop.callback);

    app.get('/api/orders', shop.order);
}