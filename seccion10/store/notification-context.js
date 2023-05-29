import { createContext, useState } from 'react'

const NotificationContext = createContext({
  notification: null, //{ title, message,status}
  showNotification: (notificationData) => { },
  hideNotification: () => { }
})

export const NotificationContextProvider = (props) => {
  const [activeNotification, setActiveNotification] = useState()

  const showNotification = (notificationData) => {
    setActiveNotification(notificationData)
  }
  const hideNotification = () => {
    setActiveNotification(null)
  }


  const context = {
    notification: activeNotification,
    showNotification: showNotification,
    hideNotification: hideNotification
  }

  return <NotificationContext.Provider value={context} >
    {props.children}
  </NotificationContext.Provider>
}

export default NotificationContext;