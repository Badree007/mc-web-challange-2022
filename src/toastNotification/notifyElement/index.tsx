import { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { BsExclamation } from 'react-icons/bs';
import { BsCheck } from 'react-icons/bs';

const typeData = {
  SUCCESS: {
    name: 'success',
    color: '#4caf50',
    Icon: ()=> <BsCheck size={'25px'}/>
  },
  WARNING: {
    name: 'warning',
    color: '#e7bf14',
    Icon: ()=> <BsExclamation size={'25px'}/>
  },
  ERROR: {
    name: 'error',
    color: '#f47249',
    Icon: ()=> <BsExclamation size={'25px'}/>
  }
}

const animations = {
  FLY_IN: 'notify-fly-in',
  FLY_OUT: 'notify-fly-out',
  TIME: 200
}

const NotifyElement = ({notification}: NotificationObj) => {
  const [closeModal, setCloseModal] = useState(false);
  const [closeTimerWidth, setCloseTimerWidth] = useState(100);
  const [animationName, setAnimationName] = useState(animations?.FLY_IN);
  const {message, type, closeTime} = notification || {};

  const notificationType = (typeData as any)[notification?.type?.toUpperCase()];

  const closeNotifyElement = ()=> {
    setAnimationName(animations.FLY_OUT);
    setTimeout(()=> {
      setCloseModal(!closeModal)
    }, animations.TIME)
  }

  useEffect(()=> {
    setTimeout(()=> {
      setCloseTimerWidth(0);
    }, animations.TIME);

    if(!closeTime) return;

    setTimeout(()=> {
      closeNotifyElement();
    }, closeTime)
  }, [closeTime])

  return !closeModal ? (
    <div className='notify-element-container' style={{backgroundColor: notificationType?.color, animation: `${animationName} ${animations.TIME / 1000}s`}}>
      <div className='message-container'>
        <div className='notify-icon'>{notificationType?.Icon()}</div>
        <div className='notify-message'><span>{message || type}</span></div>
      </div>
      <div className='close-container'>
        <IoClose size={'20px'} onClick={closeNotifyElement} />
      </div>
      {!!closeTime && <div className='close-timer' style={{width: `${closeTimerWidth}%`, transition: `width ${closeTime / 1000}s ease`  }} ></div>}
    </div>
  ) : null;
}

type NotificationObj ={
  notification: {
    type: string,
    message: string,
    closeTime: number
  }
}

export default NotifyElement;
