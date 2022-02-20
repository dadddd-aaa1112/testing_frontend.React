import React, { useState, useEffect, createRef } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import {
	Button,
	Grid,
	Typography,
	TextField,
	FormControl,
	TableContainer,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Table,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import ArrowForward from '@mui/icons-material/ArrowForward'
import ArrowBack from '@mui/icons-material/ArrowBack'

const ListUsers = () => {
	const [users, setUsers] = useState([])

	const navigate = useNavigate()

	useEffect(() => {
		const baseUrl = 'https://jsonplaceholder.typicode.com/users'
		axios.get(baseUrl).then((resp) => {
			const allUsers = resp.data
			setUsers(allUsers)
		})
	}, [setUsers])

	const searchUser = (e) => {
		e.preventDefault()
		const searchData = e.target.value
		const res = users.filter((user) =>
			user.name.toLowerCase().includes(searchData.toLowerCase())
		)
		setUsers(res)
	}

	const inputRef = createRef()

	return (
		<>
			<Typography variant="h5" sx={{ my: 3 }}>
				Список всех пользователей
			</Typography>
			<Button
				variant="contained"
				color="success"
				onClick={() => navigate('/add')}
			>
				Добавить пользователя
			</Button>
			<TextField
				label="Поиск"
				variant="outlined"
				type="text"
				onChange={(e) => searchUser(e)}
				inputRef={inputRef}
				sx={{ float: 'right' }}
			/>
			<TableContainer>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="right">ФИО</TableCell>
							<TableCell align="right">EMAIL</TableCell>
							<TableCell align="right">Редактировать</TableCell>
							<TableCell align="right">Удалить</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{users.map((user) => (
							<TableRow key={user.id}>
								<TableCell>{user.name}</TableCell>
								<TableCell align="right">{user.email}</TableCell>
								<TableCell align="right">
									<Button
										size="small"
										sx={{ ml: 2 }}
										variant="contained"
										color="primary"
										onClick={() => navigate(`/edit/${user.id}`)}
									>
										Редактировать
									</Button>
								</TableCell>

								<TableCell align="right">
									<Button
										variant="outlined"
										size="small"
										sx={{ ml: 2 }}
										startIcon={<DeleteIcon />}
										onClick={() => navigate(`/edit/${user.id}/delete`)}
									>
										Удалить
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<Button startIcon={<ArrowBack />}></Button>
			<Button startIcon={<ArrowForward />}></Button>
		</>
	)
}

export default ListUsers
