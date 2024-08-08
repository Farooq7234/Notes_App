import { useState } from 'react';
import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';

const Home = () => {
    const [notes, setNotes] = useState([]);

    const handleSaveNote = (newNote) => {
        setNotes([...notes, { ...newNote, id: Date.now() }]);
    };

    const handleNoteClick = (id) => {
        console.log('Note clicked:', id);
        // Navigate to note detail page
    };

    return (
        <div className="p-4">
            <NoteForm onSave={handleSaveNote} />
            <NoteList notes={notes} onNoteClick={handleNoteClick} />
        </div>
    );
};

export default Home;
