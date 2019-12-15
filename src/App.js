import React, { Component } from 'react';
import './App.css';
import AppRouter from './routes';
import { auth, createUserProfileDocument } from './database/firebase.utils';

class App extends Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    // const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              displayName: snapShot.data().displayName,
              ...snapShot.data()
            }
          });
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <AppRouter currentUser={ this.state.currentUser } />
    );
  }
}

export default App;
