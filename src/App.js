import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component';
import LoginLogout from './pages/login-logout/login-logout'
import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/checkout/checkout'

class App extends React.Component {
unsubscribeFromAuth = null;

  componentDidMount () {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        });
      }
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount() {
      this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div >
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage}/>
      <Route exact path="/login" render={()=>this.props.currentUser ? (<Redirect to="/" />): (<LoginLogout />)} />
      <Route exact path ="/checkout" component={CheckoutPage} />
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUsers: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
