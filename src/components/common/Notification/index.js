import { notification } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeNotification } from "../../../redux/actions/notification";

const Notification = () => {
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();
  const [api, contextHolder] = notification.useNotification();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const OpenNotification = (type, message, id) => {
    api[type]({
      message: type,
      description: message,
      onclose: dispatch(removeNotification(id))
    });
  };

  useEffect(() => {
    notifications?.map((notification) => OpenNotification(notification.type, notification.msg, notification.id));
  }, [OpenNotification, notifications]);

  return <>{contextHolder}</>;
};

export default Notification;
