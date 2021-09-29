import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddNotes from "./src/screens/AddNotes";
import ViewNotes from "./src/screens/ViewNotes";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./src/redux/TodoReducers";

const store = createStore(reducer);
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ViewNotes"
            component={ViewNotes}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddNotes"
            component={AddNotes}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
