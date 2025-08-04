import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import NewPost from './pages/NewPost';
import Messages from './pages/Messages';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div className="pb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/new" element={<NewPost />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Navbar />
      </div>
    </Router>
  );
};

export default App;