import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './Navigation';

export default function App() {
    return (
        <> 
        {/* <> </>  Fragment*/}
        
            
            
            <NavigationContainer>
                <Navigation />
            </NavigationContainer>
        </>
    );
}
