import { useEffect, useState } from 'react';
import './styleNotification.css';
import { useNotification } from '../context/NotificationContext';
import NotifyElement from './notifyElement';

const NotificationTab = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const notificationList = useNotification();

  let position = notifications[notificationList.length -1]?.position?.toLowerCase();
  position = ['top', 'top-right', 'bottom-right'].includes(position) ? position : 'top-right';
  
  useEffect(()=> {
    if(!notificationList) return;

    const lastAdded: any = !!notificationList?.length && notificationList[notificationList.length -1]; 
    if(lastAdded && !lastAdded?.type) {
      console.error('Notification type is required! But found not provided');
      return;
    } 
    if(lastAdded && !['success', 'error', 'warning'].includes(lastAdded?.type?.toLowerCase())) {
      console.error('Invalid Notification type!');
      return;
    }
    const list = notificationList.filter((notification: Notification) => notification?.type && ['success', 'error', 'warning'].includes(notification?.type?.toLowerCase()))

    setNotifications([...list]);
  }, [notificationList])

  return (
    <div className='notify-main'>
      <div className={`notify-container ${position}`}>
        { notifications && notifications.map((notificationItem, index)=> {return (<NotifyElement key={index} notification={notificationItem} />)}
        )}
      </div>
    </div>
  );
};

type Notification = {
  type: string,
  message: string,
  closeTime: number,
  position: string
}

export default NotificationTab;
