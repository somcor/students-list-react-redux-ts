import React from 'react';
import './App.css';
import StudentList from './components/StudentsList/StudentList';
import AddBtn from './components/AddBtn/AddBtn';
 
const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <StudentList />
        <AddBtn />
      </div>
    </div>
  );
};
 
export default App;