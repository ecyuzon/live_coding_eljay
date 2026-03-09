document.addEventListener('DOMContentLoaded', function() {
    window.incrementNotifications = function() {
        var notificationCountElement = document.getElementById('notif_ctr');
        var currentCount = parseInt(notificationCountElement.textContent);
        notificationCountElement.textContent = currentCount + 1;
    };
});