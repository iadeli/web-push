var push = require('web-push');
// let vapidKeys = push.generateVAPIDKeys();
// console.log(vapidKeys);

let vapidKeys = {
    publicKey: 'BH2Bz0O6IF_tNIg8fr6WQQsbRsrsgtaOq_01LgysXnNZBh-FLBOvnbM7d_jTl0Vd0byWcnMdlYZUAuV-6YANKXo',
    privateKey: 'aRQXg-pHkVUAqWaO4toF1NzcLFN8M_iTcQEaQ3TRWo8'
}

push.setVapidDetails('mailto:i.adeli.3487@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = { 
    "endpoint": "https://fcm.googleapis.com/fcm/send/eJG02w0h-RU:APA91bEnxU_4CHf9-J6Czt8fHISRoeEpZ0z33zklBCVpSeEdsFGT02_lCbyGZElEvDrE_6yTv8h2zwOMYjrDb0kI_F5lGI8qimBBMnF9FHknmH5JX464KWB19qZiMz-OhFUowFFqhIDJ", 
    "expirationTime": null, 
    "keys": { "p256dh": "BG5hVY28BJr7pnIh1-h5_FrRZ1w1osrR0TTOxDxQfimC9CpYZ5wUvR8e962uL9U6ED3tXzX_L4xY1oaWldrqUxc", "auth": "CFMAiki2OKYzGBieyNOjkQ" } 
}

push.sendNotification(sub, 'test message');