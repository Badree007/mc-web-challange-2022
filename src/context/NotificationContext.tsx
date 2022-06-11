import React, {useState, useContext} from 'react';

const NotificationContext = React.createContext([]);
const AddNotificationContext = React.createContext(true);

export const useNotification = ()=> {
    return useContext(NotificationContext);
}
export const useAddNotification = ()=> {
    return useContext(AddNotificationContext);
}

export const NotificationProvider = ({children}:any)=> {
    const [notificationList, setNotificationList] = useState<object[]>([]);

    const addNotification = (notification: object) => {
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
