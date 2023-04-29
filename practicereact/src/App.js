import { useState } from 'react';
import './App.css';
import AddUserForm from './components/AddUserForm/AddUserForm';
import UserList from './components/UserList/UserList';

function App() {
const [user, setUser]=useState([]);

  const getUserData = (userData)=>{
    setUser(prevUserData=>{
      const updatedUserData = [...prevUserData];
      updatedUserData.unshift({userData, id:Math.random().toString()});
      return updatedUserData;
    });
  }

  return (
    <div className="App">
      <AddUserForm onGetUserData={getUserData}/>
      <UserList userData={user}/>
    </div>
  );
}

export default App;
