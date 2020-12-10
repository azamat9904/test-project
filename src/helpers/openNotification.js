import { notification } from 'antd';

const notificationEl = (title, description, type = "info", duration = 2) => {
    notification[type]({
        message: title,
        description: description,
        duration: duration
    });
};

export default notificationEl;