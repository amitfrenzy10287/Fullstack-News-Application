import React, { Component } from 'react';
import News from './containers/News/News';
import Home from './containers/Home';
import Login from './containers/Users/Login';
import Logout from './containers/Users/Logout';
import AddNews from './containers/News/AddNews';
import NewsDetails from './containers/Home/NewsDetails';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { connect } from 'react-redux';

class App extends Component{
  render() {
    const { isAuthenticated } = this.props;
    let routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/newsdetails" component={NewsDetails} />
        <Redirect to="/" />
      </Switch>
    );
    if(isAuthenticated!==null){
      routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/news" component={News} />
        <Route path="/addNews" component={AddNews} />
        <Route path="/newsdetails" component={NewsDetails} />
        <Redirect to="/" />
      </Switch>
    );
    }
    
    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token!==null
  };
};

export default withRouter( connect( mapStateToProps, null )( App ) );