import React from "react";
import {View ,Text} from 'react-native'
import RootNavigation from "./src/Navigation/RootNavigation";
import { Provider } from 'react-redux';
import store from './src/Redux/store'

const App = () =>{
  return(
    <Provider store={store}>
    <RootNavigation/>
    </Provider>
  )
}

export default App;



