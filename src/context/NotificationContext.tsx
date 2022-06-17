import React, {useState, useContext} from 'react';

const NotificationContext = React.createContext<Notification[]>([]);
const AddNotificationContext = React.createContext<Function>(():any=>{});

export const useNotification = ():any => {
    return useContext(NotificationContext);
}
export const useAddNotification = ():any => {
    return useContext(AddNotificationContext);
}

export const NotificationProvider = ({children}:any)=> {
    const [notificationList, setNotificationList] = useState<Notification[]>([]);

    const addNotification = (notification: Notification) => {
        if(!notification) return;
        setNotificationList((prev) => {
            return [...prev, notification];
        });
    }

    return (
        <NotificationContext.Provider value={notificationList}>
            <AddNotificationContext.Provider value={addNotification}>
                {children}
            </AddNotificationContext.Provider>
        </NotificationContext.Provider>
    )
}

type Notification = {
    type: string,
    message: string,
    closeTime: number,
    position: string
  }
