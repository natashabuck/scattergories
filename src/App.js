import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { Layout, Typography, } from 'antd';
import SignIn from './SignIn'
import Chat from './Room'
import './App.css';
import { WebSocketProvider, store } from './utils';
import Scattergories from './Scattergories/Scattergories';
const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const titleStyle = { color: 'white', textAlign: 'center', maxWidth: 1300 }

const App = () => {
  const currentRoom = useSelector( state => state.room );
  if ( !currentRoom ) return <SignIn />
  return (
    <Layout>
      <Sider style={{ background: 'none', marginTop: 30 }}>

      </Sider>
      <Content style={{ padding: 30 }}>
        <Scattergories />
      </Content>
      <Sider>
        <Chat />
      </Sider>
    </Layout>
  )
}

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <WebSocketProvider>
        <Layout style={{ background: 'none', padding: 30 }}>
          <Header style={{ background: 'none' }}>
            <Title level={1} style={titleStyle}>GAME NIGHT</Title>
          </Header>
          <App />
        </Layout>
      </WebSocketProvider>
    </Provider>
  )
}
export default AppWrapper