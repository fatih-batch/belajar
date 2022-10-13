import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { store } from "../utils/redux/store/store";
import { Provider } from "react-redux";

import App from '../pages/App';
import Coba from '../pages/Coba';

const Index = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}></Route>
                    <Route path="/coba" element={<Coba />}></Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default Index;