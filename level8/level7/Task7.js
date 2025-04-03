import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { store } from '../store';
import DataFetcher from '../DataFetcher';


const App = () => {
    const loading = useSelector(state => state.loading);

    return (
        <Provider store={store}>
            <div style={{ padding: '20px' }}>
                <h1>React App with Axios Interceptors</h1>
                {loading && <div>Loading...</div>}
                <DataFetcher />
            </div>
        </Provider>
    );
};

export default App;
