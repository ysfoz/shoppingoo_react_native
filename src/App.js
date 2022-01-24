// In App.js in a new project

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Register, Login,Home,Profile,Product,Cart, ProductsList } from "./pages"
import { store} from "./redux/store"
import { Provider } from 'react-redux';





const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>

    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="productslist" component={ProductsList} />
        <Stack.Screen name="login" component={Login}  />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="cart" component={Cart} />
        <Stack.Screen name="product" component={Product} />
        <Stack.Screen name="profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
        </Provider>
  );
}

export default App;