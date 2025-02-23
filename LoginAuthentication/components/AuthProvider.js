// The AuthProvider component is a wrapper that provides the 
// authentication context to its children.

// It uses useState to manage the user state. Initially, user 
// is null (no user is logged in).

// The login function updates the user state with the provided userData.

// The logout function resets the user state to null.

// The value prop of AuthContext.Provider passes the 
// user, login, and logout to all components that consume this context.

import React, { createContext, useState } from 'react';
import { View } from 'react-native';

// Create a Context for authentication
// AuthContext:
//   AuthContext is an object created using React's createContext() function.
//   It has two main properties:
//     Provider: A component that provides the context value to its children.
//     Consumer: A component that consumes the context value (less commonly 
//               used now with the useContext hook).

export const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

// AuthContext.Provider is a component provided by React's Context API.
// It allows you to "provide" (or share) data and functions to all 
// components in its subtree (i.e., its children)

// The Provider component takes a value prop, which contains the data or 
// functions you want to share.

// Any component within the Provider's subtree can access this value 
// using the useContext hook. (see LoginScreen.js and ProfileScreen.js)

// {children} is a special prop in React that represents the components 
// or elements nested inside the AuthProvider component.

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );

}


// In this app {children} are:

// <NavigationContainer>
//   <Drawer.Navigator initialRouteName="Home">
//     <Drawer.Screen name="Home" component={HomeScreen} />
//     <Drawer.Screen name="Login" component={LoginScreen} />
//     <Drawer.Screen name="Profile" component={ProfileScreen} />
//     <Drawer.Screen name="Protected" component={ProtectedScreen} />
//   </Drawer.Navigator>
// </NavigationContainer>

// See the App.js file for the full code.