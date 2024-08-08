import NoteCard from './NoteCard';

const NoteList = ({ notes, onNoteClick }) => {
    return (
        <div className="grid grid-cols-1 gap-4">
            {notes.map((note) => (
                <NoteCard key={note.id} note={note} onClick={() => onNoteClick(note.id)} />
            ))}
        </div>
    );
};

export default NoteList;
