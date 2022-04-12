import {NotificationManager} from 'react-notifications';

const Notifications = {
    success: function (message) {
        NotificationManager.success(message);
        return;
    },
    error: function (message) {
        NotificationManager.error(message);
        return;
    }


}


export default Notifications;