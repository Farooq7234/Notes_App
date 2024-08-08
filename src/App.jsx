import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import NoteDetail from './pages/NoteDetail';
import { useState } from 'react';
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx';
function App() {
    const [notes, setNotes] = useState([]);

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home notes={notes} setNotes={setNotes} />} />
                <Route path="/note/:id" element={<NoteDetail notes={notes} />} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </Router>
    );
}

export default App;
