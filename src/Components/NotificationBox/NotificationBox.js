import React from "react"
import { Button, notification } from 'antd';

const Context = React.createContext({ name: 'Default' });

const NotificationBox = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = placement => {
    api.info({
      message: `Notification ${placement}`,
      description: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
      placement,
    });
  };

  return (
    <Context.Provider value={{ name: 'Ant Design' }}>
      {contextHolder}
        <Button type="danger" onClick={() => openNotification('bottomLeft')}>
          bottomLeft
        </Button>
    </Context.Provider>
  );
};

export default NotificationBox;