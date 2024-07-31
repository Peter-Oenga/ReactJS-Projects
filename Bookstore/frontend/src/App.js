import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import BookDetail from './components/BookDetail';
import Cart from './components/Cart';
import UserProfile from './components/UserProfile';
import BookList from './components/Booklist';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<BookList />} />
                <Route path="/book/:id" element={<BookDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<UserProfile />} />
            </Routes>
        </Router>
    );
}

export default App;
