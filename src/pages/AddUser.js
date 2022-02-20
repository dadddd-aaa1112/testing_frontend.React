import React, { createRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {
	Button,
	MenuItem,
	Select,
	TextField,
	Typography,
	FormControl,
} from '@mui/material'

const Adduser = () => {
	const navigate = useNavigate()

	const addUser = () => {
		const addData = {
			id: new Date().toString(),
			name: addName.current.value,
			email: addSelect.current.value,
		}
		axios
			.post(`https://jsonplaceholder.typicode.com/users/`, {
				addData,
			})
			.then((res) => {
				console.log(res)
			})
		navigate('/list')
	}

	const addName = createRef()
	const addSelect = createRef()

	return (
		<FormControl>
			<Typography variant="h5" sx={{ my: 3 }}>
				Добавление пользователя
			</Typography>

			<TextField variant="standard" type="text" ref={addName} label="ФИО" />
			<Select
				sx={{ mt: 3 }}
				className="input-field"
				label="	Выберите ваш город"
				ref={addSelect}
			>
				<MenuItem value="1">Краснодар</MenuItem>
				<MenuItem value="2">Москва</MenuItem>
				<MenuItem value="3">Санкт-Петербург</MenuItem>
			</Select>
			<Button
				sx={{ mt: 3 }}
				variant="contained"
				color="success"
				onClick={addUser}
			>
				Добавить пользователя
			</Button>
		</FormControl>
	)
}

export default Adduser
