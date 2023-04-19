import * as React from 'react';
import * as SecureStore from 'expo-secure-store';

import AuthContext from './AppContext';
import SignIn from './SignIn';
import App from '../App';

import {Provider} from 'react-redux';
import {store} from './redux/store';

import axios from "axios";

export default function MainApp({ navigation }) {

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        //userToken = await SecureStore.getItemAsync('userToken');
        
        // Right now bypass the login operation
        userToken = 'dummy-auth-token';

      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const doRequest=async()=> {
    let testURL = 'https://rams.mp.gov.in/rams/MPCommonLoginController';

        let testData= {
          "mainkey":"login",
          "username":"rranjan",
          "password":"8ee2ce9d7cedd3cb106a6f3472c16706c42ab71bc736222e5dd22bd830f88deb",
          "macid":"",
          "randomToken":"62131533720"
        }

        let HEADER_CONFIG = {
          "header": { 
              timeout:30000,
              timeoutErrorMessage:'timeout',
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/x-www-form-urlencoded'
              }
          }
        };

        console.log("URL::"+testURL);

        await axios.post(testURL, JSON.stringify(testData), HEADER_CONFIG)
          .then(res => {
            console.log("retrun==" + JSON.stringify(res.data));
            // console.log("url  ==" + API.login);
          })
          .catch(err => {
            console.log("Error::"+JSON.stringify(err));
          });
  }

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: 'LOAD', loading: true, txt: 'auth check...' });
                
        /* if(data.email == 'email' && data.password == 'password') {
          dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
        }
        else {
          alert("Wrong credentials");
          dispatch({type: 'SIGN_OUT' });
        } */

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });

        let testURL = 'https://rams.mp.gov.in/rams/MPCommonLoginController';

        let testData= {
          "mainkey":"login",
          "username":"rranjan",
          "password":"8ee2ce9d7cedd3cb106a6f3472c16706c42ab71bc736222e5dd22bd830f88deb",
          "macid":"",
          "randomToken":"62131533720"
        }

        let HEADER_CONFIG = {
          "header": { 
              timeout:30000,
              timeoutErrorMessage:'timeout',
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/x-www-form-urlencoded'
              }
          }
        };

        console.log("URL::"+testURL);

        await axios.post(testURL, JSON.stringify(testData), HEADER_CONFIG)
          .then(res => {
            console.log("retrun==" + JSON.stringify(res.data));
            // console.log("url  ==" + API.login);
          })
          .catch(err => {
            console.log("Error::"+JSON.stringify(err));
            doRequest();
          });

      },
      forgotPwd: async()=> {
        //let grievenceURL = 'https://rams.mp.gov.in/rams/citizengrievance.jsp';
        let grievenceURL = 'https://google.com';
        await axios.get(grievenceURL)
          .then(res => {
            console.log("retrun==" + JSON.stringify(res.data));
            // console.log("url  ==" + API.login);
          })
          .catch(err => {
            console.log("Error::"+JSON.stringify(err));
          });
      },
      signOut: () => {
        console.log("Sign out");
        dispatch({ type: 'SIGN_OUT' });
      },
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  return (
    <Provider store={store}>
      <AuthContext.Provider value={authContext}>
        {
            state.userToken == null ? (
              <SignIn/>
            ) : (
              <App/>
            )
        }
      </AuthContext.Provider>
    </Provider>
  );


}

