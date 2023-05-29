import { Fragment, useContext } from 'react';

import MainHeader from './main-header';
import Notification from '../../components/ui/notification'
import NotificationContext from '../../store/notification-context'


function Layout(props) {
  const context = useContext(NotificationContext);

  const activeNotification = context.notification;


  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      {activeNotification && (<Notification title={activeNotification.title} message={activeNotification.message} status={activeNotification.status} />)}

    </Fragment>
  );
}

export default Layout;
