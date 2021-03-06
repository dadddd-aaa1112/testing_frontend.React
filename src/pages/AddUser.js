import React, { createRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {
	Button,
	MenuItem,
	Select,
	TextField,
	Typography,
	FormControl,
	InputLabel,
} from '@mui/material'

const Adduser = () => {
	const navigate = useNavigate()

	const addUser = () => {
		console.log('name', addName.current.value)
		console.log('email', addSelect.current.value)

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

	const [city, setCity] = useState('')

	const handleChange = (event) => {
		setCity(event.target.value)
	}

	const [allCity, setAllCity] = useState([])

	useEffect(() => {
		const baseUrl = 'https://htmlweb.ru/json/geo/city_list?country=Russia'

		axios.get(baseUrl).then((resp) => {
			const allCity = resp.data.items
			setAllCity(allCity)
		})
	}, [setAllCity])

	return (
		<FormControl>
			<Typography variant="h5" sx={{ my: 3 }}>
				Добавление пользователя
			</Typography>

			<TextField
				variant="standard"
				type="text"
				inputRef={addName}
				label="ФИО"
			/>

			<FormControl sx={{ mt: 3 }} fullWidth>
				<InputLabel id="city-label"> </InputLabel>
				Выберите ваш город
				<Select
					id="city-label"
					value={city}
					onChange={handleChange}
					label="Выберите ваш город"
					inputRef={addSelect}
				>
					{allCity.map((citys) => (
						<MenuItem key={city.id} value={citys.name}>
							{citys.name}
						</MenuItem>
					))}
				</Select>
			</FormControl>

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
