import { useParams } from 'react-router-dom';

const NoteDetail = ({ notes }) => {
    const { id } = useParams();
    const note = notes.find(note => note.id === parseInt(id));

    if (!note) return <div>Note not found</div>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{note.title}</h1>
            <p>{note.content}</p>
        </div>
    );
};

export default NoteDetail;
