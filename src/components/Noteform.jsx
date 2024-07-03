import React, { useState } from 'react';

const NoteForm = () => {
    const [note, setNote] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('https://9sg792mmhj.execute-api.us-east-1.amazonaws.com/dev/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ note }),
        });

        if (response.ok) {
            alert('Note created successfully');
            setNote('');
        } else {
            alert('Failed to create note');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea  
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Enter your note"cols="30" rows="10"></textarea>
            <button type="submit">Add Note</button>
        </form>
    );
};

export default NoteForm;