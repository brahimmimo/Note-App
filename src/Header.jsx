import React from 'react';

function Header() {
  return (
    <div style={headerStyle}>
      <h1>Notes</h1>
      <div style={userInfoStyle}>
        <span>Note</span>
        <img src="https://via.placeholder.com/40" alt="User" style={userImageStyle} />
      </div>
    </div>
  );
}

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 0',
  borderBottom: '1px solid #ccc',
};

const userInfoStyle = {
  display: 'flex',
  alignItems: 'center',
};

const userImageStyle = {
  borderRadius: '50%',
  marginLeft: '10px',
};

export default Header;
