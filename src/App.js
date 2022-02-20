import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Navigation from './components/Navigation'
import Auth from './pages/Auth'
import AddUser from './pages/AddUser'
import ListUsers from './pages/ListUsers'
import ItemUser from './pages/ItemUser'
import DeleteUser from './pages/DeleteUser'
import Container from '@mui/material/Container'

const App = () => {
	return (
		<Container>
			<BrowserRouter>
				<Routes>
					<Route path="/list" element={<ListUsers />} />
					<Route path="/" element={<Auth />} />
					<Route path="/add" element={<AddUser />} />
					<Route path="/edit/:id" element={<ItemUser />} />
					<Route path="/edit/:id/delete" element={<DeleteUser />} />
				</Routes>
			</BrowserRouter>
		</Container>
	)
}

export default App
