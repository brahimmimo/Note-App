import React from 'react';
import NoteItem from './NoteItem';

function NotesList() {
  const notesData = [
    {
      title: "Today's Notes",
      notes: [
        { text: 'Meeting with client', action: 'Shopping list' },
        { text: 'Ideas for project', action: 'Reminder for' },
        { text: 'Brainstorming session', action: 'To-do list' },
      ],
    },
    {
      title: "Tomorrow's Notes",
      notes: [
        { text: 'Project proposal', action: 'Important meeting' },
        { text: 'Research findings', action: 'Search for the day' },
        { text: 'Weekly progress report', action: 'Upcoming deadlines' },
      ],
    },
    {
      title: "This Week's Notes",
      notes: [
        { text: 'Client feedback', action: 'Important meeting' },
        { text: 'Team evaluations', action: 'Project deadline' },
        { text: 'Product features', action: 'Project completion' },
      ],
    },
  ];

  return (
    <div>
      {notesData.map((section, index) => (
        <div key={index} style={sectionStyle}>
          <h2>{section.title}</h2>
          {section.notes.map((note, idx) => (
            <NoteItem key={idx} text={note.text} action={note.action} />
          ))}
        </div>
      ))}
    </div>
  );
}

const sectionStyle = {
  marginBottom: '30px',
};

export default NotesList;
