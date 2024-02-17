import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Account } from './Pages/Account';
import { Notes } from './Pages/Notes';
import { Navbar } from './Components/Navbar';
import { AddPost } from './Components/AddPost';
import { Edit } from './Components/Edit';

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Notes />}/>
      <Route path="/account" element={<Account />}/>
      <Route path='/addPost' element={<AddPost />}/>
      <Route path='/edit/:id' element = {<Edit />} />
    </Routes>
    </>
  )
}

export default App
