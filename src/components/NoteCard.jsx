const NoteCard = ({ note, onClick }) => {
    return (
        <div onClick={onClick} className="bg-white shadow-md p-4 rounded-md cursor-pointer">
            <h2 className="text-xl font-semibold">{note.title}</h2>
            <p className="text-gray-600">{note.content.substring(0, 100)}...</p>
        </div>
    );
};

export default NoteCard;
