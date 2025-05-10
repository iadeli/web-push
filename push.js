var push = require('web-push');
// let vapidKeys = push.generateVAPIDKeys();
// console.log(vapidKeys);

let vapidKeys = {
    publicKey: 'BH2Bz0O6IF_tNIg8fr6WQQsbRsrsgtaOq_01LgysXnNZBh-FLBOvnbM7d_jTl0Vd0byWcnMdlYZUAuV-6YANKXo',
    privateKey: 'aRQXg-pHkVUAqWaO4toF1NzcLFN8M_iTcQEaQ3TRWo8'
}

push.setVapidDetails('mailto:i.adeli.3487@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

push.sendNotification(sub, 'test message');