import { useState } from 'react';

const NoteForm = ({ onSave, initialData }) => {
    const [title, setTitle] = useState(initialData?.title || '');
    const [content, setContent] = useState(initialData?.content || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ title, content });
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-md shadow-md">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 mb-4 border rounded-md"
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-2 mb-4 border rounded-md"
            ></textarea>
            <button type="submit" className="bg-blue-600 text-white p-2 rounded-md">
                Save Note
            </button>
        </form>
    );
};

export default NoteForm;
