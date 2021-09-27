// import 'react-native-gesture-handler';
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddNotes from "./src/screens/AddNotes";
import ViewNotes from "./src/screens/ViewNotes";
import { Provider as StoreProvider } from "react-redux";
import store from "./src/redux/store";

const Stack = createStackNavigator();

export default function App() {
  return (
    <StoreProvider store={store}>
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
    </StoreProvider>
  );
}
