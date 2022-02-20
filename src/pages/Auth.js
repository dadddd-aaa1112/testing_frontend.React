import { Button, Grid, Typography, TextField, FormControl } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
	const navigate = useNavigate()

	const loginHandler = () => {
		navigate('/list')
	}

	return (
		<FormControl sx={{ ml: 50, mt: 20 }}>
			<Typography variant="h4" sx={{ ml: 7 }}>
				Вход
			</Typography>

			<Typography variant="h7" sx={{ mt: 2 }}>
				Логин
			</Typography>

			<TextField
				variant="filled"
				size="small"
				variant="outlined"
				type="text"
				id="login"
			/>

			<Typography variant="h7" sx={{ mt: 2 }}>
				Пароль
			</Typography>
			<TextField
				size="small"
				variant="outlined"
				type="password"
				id="password"
			/>

			<Button
				sx={{ color: 'inherit', mt: 2 }}
				variant="outlined"
				onClick={loginHandler}
				type="submit"
			>
				Войти
			</Button>
		</FormControl>
	)
}

export default Auth
