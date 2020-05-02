import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppLoading } from "expo";

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
        <NavigationContainer>
            <AppNavigation/>
        </NavigationContainer>
    );
}
