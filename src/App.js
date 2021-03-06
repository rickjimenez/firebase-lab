import React, { useState, useEffect } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser, clearCurrentUser } from './redux/auth/actions';

import { auth, fn } from './firebase';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

// auth.onAuthStateChanged(function(user) {
//   if (user) {
//     // User is signed in.
//     console.log(user);
//   } else {
//     // No user is signed in.
//   }
// });

// setTimeout(() => {
//   if (auth.currentUser) {
//     auth.currentUser
//       .getIdToken(/* forceRefresh */ true)
//       .then(idToken => {
//         console.log(idToken);
//       })
//       .catch(error => {
//         // Handle error
//         console.log(error);
//       });
//   } else {
//     auth
//       .signInWithEmailAndPassword('ritch.ion@gmail.com', 'richo02')
//       .catch(error => {
//         console.log(error);
//       });
//   }
// }, 3000);

// const addMessage = fn.httpsCallable('getUsers');
// addMessage({ text: 'teso' }).then(result => {
//   // Read result of the Cloud Function.
//   console.log(result);
//   // ...
// });

// auth.signOut().then(function() {
//   // Sign-out successful.
// }).catch(function(error) {
//   // An error happened.
// });

export default () => {
  const [collapsed, setCollapsed] = useState(false);
  const currentUser = useSelector(state => state.auth.currentUser);

  const dispatch = useDispatch();

  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(setCurrentUser(user));
      } else {
        dispatch(clearCurrentUser());
      }
    });
    return () => unsubscribeFromAuth();
  }, [dispatch]);

  const signIn = () => {
    auth
      .signInWithEmailAndPassword('ritch.ion@gmail.com', 'richo02')
      .catch(error => {
        console.log(error);
      });
  };

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>{currentUser ? currentUser.email : 'User'}</span>
              </span>
            }
          >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="team" />
                <span>Team</span>
              </span>
            }
          >
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="file" />
            <span>File</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            <button type="button" onClick={signOut}>
              Sign out
            </button>
            <button type="button" onClick={signIn}>
              Sign in
            </button>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
