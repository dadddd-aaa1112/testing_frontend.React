import React, { useState, useEffect, createRef } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import { Button, Grid, Typography, TextField, FormControl } from '@mui/material'
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

	const searchUser = () => {
		const searchData = inputRef.current.value
		const res = users.filter((user) =>
			user.name.toLowerCase().includes(searchData.toLowerCase())
		)
		setUsers(res)
	}

	const inputRef = createRef()

	return (
		<div>
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
			<input
				type="text"
				onChange={() => searchUser()}
				ref={inputRef}
				placeholder="Поиск..."
			/>
			<table>
				<thead>
					<tr>
						<th>ФИО</th>
						<th>email</th>
						<th>Редактировать</th>
						<th>Удалить</th>
					</tr>
				</thead>

				<tbody>
					<>
						<tr>
							{users.map((user) => (
								<>
									<Link key={user.id} to={`/edit/${user.id}`}>
										<td>{user.name}</td>
										<td>{user.email}</td>
										<td>
											<Button
												size="small"
												sx={{ ml: 2 }}
												variant="contained"
												color="primary"
											>
												Редактировать
											</Button>
										</td>
									</Link>
									<td>
										<Button
											variant="outlined"
											size="small"
											sx={{ ml: 2 }}
											startIcon={<DeleteIcon />}
											onClick={() => navigate(`/edit/${user.id}/delete`)}
										>
											Удалить
										</Button>
									</td>
								</>
							))}
						</tr>
					</>
				</tbody>
			</table>
			<Button startIcon={<ArrowBack />}></Button>
			<Button startIcon={<ArrowForward />}></Button>
		</div>
	)
}

export default ListUsers
