import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddTodo from "./src/screens/AddTodo";
import AddTeams from "./src/screens/AddTeams";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/redux/store";
import SettingScreen from './src/screens/SettingScreen'


const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="AddTodo"
            component={AddTodo}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddTeams"
            component={AddTeams}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SettingScreen"
            component={SettingScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PersistGate>
    </Provider>
  );
}
