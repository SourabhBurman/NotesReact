import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Account } from './Pages/Account';
import { Notes } from './Pages/Notes';
import { Navbar } from './Components/Navbar';
import { AddPost } from './Components/AddPost';

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Notes />}/>
      <Route path="/account" element={<Account />}/>
      <Route path='/addPost' element={<AddPost />}/>
    </Routes>
    </>
  )
}

export default App
