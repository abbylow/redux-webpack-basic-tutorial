import React from 'react';
import { StoreProvider } from './store/store';
import App from './App';

const Provider = () => {
    return (
        <StoreProvider>
            <App />
        </StoreProvider>
    )
}

export default Provider;