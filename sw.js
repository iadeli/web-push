self.addEventListener('push', function (e) {
    // رویدادی که هنگام دریافت یک اعلان push از سرور فعال می شود.
    var options = {
        body: 'This notification was generated from a push!',
        icon: 'images/example.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {
                action: 'explore', title: 'Explore this new world',
                icon: 'images/checkmark.png'
            },
            {
                action: 'close', title: 'Close',
                icon: 'images/xmark.png'
            },
        ]
    };

    // بررسی وجود داده در رویداد push
    if (e.data != null) {
        const payload = e.data.json(); // تلاش برای تبدیل داده به JSON
        console.log('Push event data:', payload);
        options.body = payload;
        // بررسی وجود عنوان در payload
        if (payload.title) {
            notificationTitle = payload.title;
        }

        // بررسی وجود پیغام در payload
        if (payload.body) {
            notificationOptions.body = payload.body;
        }

        // می توانید سایر تنظیمات اعلان را نیز از payload دریافت کنید
        if (payload.icon) {
            notificationOptions.icon = payload.icon;
        }
        if (payload.vibrate) {
            notificationOptions.vibrate = payload.vibrate;
        }
        if (payload.data) {
            notificationOptions.data = payload.data;
        }
        if (payload.actions) {
            notificationOptions.actions = payload.actions;
        }
    }

    // اطمینان حاصل می کند که مرورگر تا زمان نمایش اعلان منتظر می ماند.
    e.waitUntil(
        // نمایش اعلان با عنوان 'Hello world!' و تنظیمات تعریف شده در 'options'.
        self.registration.showNotification('Hello world!', options)
    );
});