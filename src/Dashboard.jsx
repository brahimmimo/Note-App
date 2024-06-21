import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import NotesList from './NotesList';

function Dashboard() {
  return (
    <div style={dashboardStyle}>
      <Sidebar />
      <div style={mainContentStyle}>
        <Header />
        <NotesList />
      </div>
    </div>
  );
}

const dashboardStyle = {
  display: 'flex',
  height: '100vh',
};

const mainContentStyle = {
  flexGrow: 1,
  padding: '20px',
};

export default Dashboard;
