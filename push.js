var push = require('web-push'); // وارد کردن کتابخانه 'web-push' برای ارسال اعلان های push.

// تولید کلیدهای VAPID (اختیاری - فقط یک بار نیاز است).
// let vapidKeys = push.generateVAPIDKeys();
// console.log(vapidKeys);

// تعریف کلیدهای VAPID برای شناسایی سرور شما به سرویس push مرورگر.
let vapidKeys = {
    publicKey: 'BH2Bz0O6IF_tNIg8fr6WQQsbRsrsgtaOq_01LgysXnNZBh-FLBOvnbM7d_jTl0Vd0byWcnMdlYZUAuV-6YANKXo',
    privateKey: 'aRQXg-pHkVUAqWaO4toF1NzcLFN8M_iTcQEaQ3TRWo8'
}

// تنظیم جزئیات VAPID برای کتابخانه web-push.
push.setVapidDetails('mailto:i.adeli.3487@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/eJG02w0h-RU:APA91bEnxU_4CHf9-J6Czt8fHISRoeEpZ0z33zklBCVpSeEdsFGT02_lCbyGZElEvDrE_6yTv8h2zwOMYjrDb0kI_F5lGI8qimBBMnF9FHknmH5JX464KWB19qZiMz-OhFUowFFqhIDJ",
  "expirationTime": null,
  "keys": {
    "p256dh": "BEGA0GGM02XF9MvoknSNbFou9bX7OpifbDHLqReyevS6e2VPmXOVd7ueZMNv_ZQrCvxKj6ZDPRtbcrwFx22Cyiw",
    "auth": "0VnWdV8dufTuABLuEXPxYA"
  }
}

// تعریف یک شیء subscription (نمونه دوم - فعال).
// این شیء شامل اطلاعات endpoint و کلیدهای مورد نیاز برای ارسال اعلان push به یک کاربر خاص است.
// let sub = {
//   "endpoint": "https://fcm.googleapis.com/fcm/send/dKXAb0q9PFY:APA91bHmdWPYSq6VwPzNG0Y_kn3kGYVlmI2zQv6OsntIm8l2jKZwAf3bRCMoFy0wZxC2wl8d4Nu5tCXvuDqSp1WmtePW-gYbekUMzTJCQJNea-aa04SHR8lEVoB3mNuN0tLXJkGsRLg1",
//   "expirationTime": null,
//   "keys": {
//     "p256dh": "BA0JB5ZJ-tVhEcORVwkz355uIaH3pY-wlrPWyibtnEt50phhJ8FOI-GJypvbpQMfPlHcRqjNlNnRp0vykwio-ak",
//     "auth": "NGLDHAWM1so118jMrhx7Zw"
//   }
// }

// let sub = {
//   "endpoint": "https://fcm.googleapis.com/fcm/send/cB_IUOv3ZQ0:APA91bE21IanzlFx9Nya16z5uuhqd1MyJwEp7COuOsGF0sDnZvtYS99KyyC0saMeeYnXgokcxeexq7ddp-uPnmZBBreiYHJSjAUX8_9n2IwYyUlaCg3b7qnRrkPWZCTLTLaPi0aXn7_q",
//   "expirationTime": null,
//   "keys": {
//     "p256dh": "BG5rwKtjXjcQJfSceN41AifNluup0LuTawhx0rtf-XbFAhrjKb-w25BSr96xTnTpLOa9oh6-rmb7HiLIhLHhkGw",
//     "auth": "Ij1P7vN5eWKMILvumRA28w"
//   }
// }

// ارسال یک اعلان push به endpoint مشخص شده در شیء 'sub'.
push.sendNotification(sub, 'test message');