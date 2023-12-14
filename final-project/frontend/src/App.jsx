import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateContact from './pages/CreateContact'
import DeleteContact from './pages/DeleteContact'
import EditContact from './pages/EditContact'
import ShowContact from './pages/ShowContact'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contacts/create' element={<CreateContact/>}/>
      <Route path='/contacts/details/:id' element={<ShowContact/>}/>
      <Route path='/contacts/edit/:id' element={<EditContact/>}/>
      <Route path='/contacts/delete/:id' element={<DeleteContact/>}/>
    </Routes>
  )
}

export default App