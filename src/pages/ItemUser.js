import React, { useState, useEffect, createRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Button, Grid, Typography, TextField, FormControl } from '@mui/material'
const ItemUser = () => {
	const { id } = useParams()
	const navigate = useNavigate()

	const [user, setUser] = useState(null)

	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/users/${id}`
		axios.get(url).then((resp) => {
			const userId = resp.data
			console.log(userId)
			setUser(userId)
		})
	}, [id])

	const cancelReturnAllUser = () => {
		navigate('/list')
	}

	const applyReturnAllUser = () => {
		const inputNameValue = nameInput.current.value
		const inputEmailValue = emailInput.current.value

		const url = `https://jsonplaceholder.typicode.com/users/${id}`

		axios
			.put(url, {
				name: inputNameValue,
				email: inputEmailValue,
			})
			.then((response) => {
				console.log('Change saved...', response.data)
				navigate('/list')
			})
			.catch((e) => {
				console.log('Error... ')
			})
	}

	const nameInput = createRef()
	const emailInput = createRef()

	return (
		<>
			<Typography variant="h5" sx={{ my: 5 }}>
				Редактирование пользователя
			</Typography>
			<>
				{user && (
					<>
						<TextField
							size="small"
							variant="outlined"
							type="text"
							defaultValue={user.name}
							ref={nameInput}
						/>
						<TextField
							size="small"
							variant="outlined"
							type="text"
							defaultValue={user.email}
							ref={emailInput}
							sx={{ ml: 2 }}
						/>
					</>
				)}
				<Button
					variant="contained"
					color="primary"
					sx={{ ml: 2 }}
					onClick={cancelReturnAllUser}
				>
					Отмена
				</Button>
				<Button
					variant="contained"
					color="success"
					onClick={applyReturnAllUser}
					sx={{ ml: 2 }}
				>
					Сохранить
				</Button>
			</>
		</>
	)
}

export default ItemUser
