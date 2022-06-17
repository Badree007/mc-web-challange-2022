import React, { useState } from "react";
import { useAddNotification } from "../context/NotificationContext";

const Form = ()=> {
    const defaultData = {
        type: "",
        message: "",
        closeTime: 0,
        position: ""
    }
    const [notificationData, setNotificationData] = useState(defaultData);
    const updateNotificationList = useAddNotification();
    
    
    const createNotification =(e: any)=> {
        e.preventDefault();
        updateNotificationList(notificationData);
    }
    
    return (
        <React.Fragment>
          <div className="main_div"> 
            <div className="form_div">
              <form className="form">
                <div className="input_div">
                  <label>Notification Type: </label>
                  <input className="input" type='text' value={notificationData?.type || ''} placeholder="eg: success, warning, or error" 
                    onChange={(e)=> setNotificationData((prev)=> {return {...prev, type: e.target.value} })}></input>
                </div>
                <div className="input_div">
                  <label>Closing Time: </label>
                  <input className="input" type='number' value={notificationData?.closeTime || ''} placeholder="time in millisecond" 
                    onChange={(e)=> setNotificationData((prev)=> {return {...prev, closeTime: Number(e.target.value)} })}></input>
                </div>
                <div className="input_div">
                  <label>Position: </label>
                  <input className="input" type='text' value={notificationData?.position || ''} placeholder="eg: top, top-right and bottom-right" 
                    onChange={(e)=> setNotificationData((prev)=> {return {...prev, position: e.target.value} })}></input>
                </div>
                <div className="input_div">
                  <label>Message: </label>
                  <textarea className="input" value={notificationData?.message || ''} placeholder="notification message" 
                    onChange={(e)=> setNotificationData((prev)=> {return {...prev, message: e.target.value} })} />
                </div>
                <div className="form-submit">
                  <button className="form-btn" onClick={createNotification} >Create Notification</button>
                </div>
              </form>
            </div>
          </div>
        </React.Fragment>
    )
}

export default Form;