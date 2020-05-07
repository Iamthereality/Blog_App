import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppLoading } from "expo";

import { Provider } from "react-redux";
import store from './src/store/index';

import { bootstrap } from "./src/bootstrap";
import { AppNavigation } from "./src/navigation/AppNavigation";


export default function App() {
    const [isReady, setIsReady] = useState(false);

    if (!isReady) {
        return <AppLoading startAsync={ bootstrap }
                           onFinish={ () => setIsReady(true) }
                           onError={(error) => console.log(error)}
        />
    }

    return (
        <Provider store={ store }>
            <NavigationContainer>
                <AppNavigation/>
            </NavigationContainer>
        </Provider>
    );
}
