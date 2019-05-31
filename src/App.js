import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Layout, Row, Col } from 'antd';
import MovieSeating from './containers/seating';
import AppHeader from './components/header';
import AppFooter from './components/footer';
import AppCarousel from './components/carousel';

import store from './store';
import Cart from './containers/cart';

const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout className="layout">

          <AppHeader />

          <Layout>
            <Content style={{ padding: '0 50px' }}>

              <AppCarousel />

              <Layout>
                <div style={{ background: '#fff', padding: 24, minHeight: 1000 }}>
                  <Row gutter={24}>
                    <Col xs={24} sm={24} md={18} lg={18} xl={18} xxl={18}>
                      <MovieSeating />
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
                      <Cart />
                    </Col>
                  </Row>

                </div>
              </Layout>
            </Content>
          </Layout>
          <AppFooter />
        </Layout>
      </Provider>
    );
  }
}

export default App;
