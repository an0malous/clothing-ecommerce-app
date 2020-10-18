import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css';
import { Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component';
import LoginLogout from './pages/login-logout/login-logout'
import { auth } from './firebase/firebase.utils';
class App extends React.Component {
  constructor(){
    super()
  
    this.state = {
      currentUser: null
  };
}

  componentDidMount () {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

    })
  }

  componentWillUnmount() {
      this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div >
      <Header currentUser={this.state.currentUser}/>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage}/>
      <Route exact path="/login" component={LoginLogout}/>
      </div>
    );
  }
}

export default App;
