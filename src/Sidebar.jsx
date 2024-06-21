import React from 'react';

function Sidebar() {
  return (
    <div style={sidebarStyle}>
      <ul style={listStyle}>
        <li style={itemStyle}>Dashboard</li>
        <li style={itemStyle}>Add Note</li>
        <li style={itemStyle}>View Notes</li>
        <li style={itemStyle}>Edit Note</li>
        <li style={itemStyle}>Delete Note</li>
      </ul>
    </div>
  );
}

const sidebarStyle = {
  width: '200px',
  backgroundColor: '#f8f8f8',
  padding: '20px',
  borderRight: '1px solid #ccc',
};

const listStyle = {
  listStyleType: 'none',
  padding: 0,
};

const itemStyle = {
  marginBottom: '15px',
  cursor: 'pointer',
};

export default Sidebar;
