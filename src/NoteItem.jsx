import React from 'react';

function NoteItem({ text, action }) {
  return (
    <div style={noteItemStyle}>
      <span>{text}</span>
      <div style={actionStyle}>
        <span>{action}</span>
        <button style={buttonStyle}>Edit</button>
        <button style={buttonStyle}>Delete</button>
      </div>
    </div>
  );
}

const noteItemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 0',
  borderBottom: '1px solid #ccc',
};

const actionStyle = {
  display: 'flex',
  alignItems: 'center',
};

const buttonStyle = {
  marginLeft: '10px',
  padding: '5px 10px',
  backgroundColor: 'black',
  color: 'white',
  border: 'none',
  borderRadius: '3px',
  cursor: 'pointer',
};

export default NoteItem;
