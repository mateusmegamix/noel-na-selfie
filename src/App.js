import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Splash from './pages/splash';
import Main from './pages/main';
import PosFoto from './pages/posfoto';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* <Stack.Screen name="Splash" component={Splash} /> */}
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="PosFoto" component={PosFoto} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;